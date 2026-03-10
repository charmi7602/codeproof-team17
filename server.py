from flask import Flask, request, jsonify
import requests

app = Flask(__name__)

@app.route("/verify")
def verify():
    username = request.args.get("username")

    if not username:
        return jsonify({"error": "No username provided"})

    url = f"https://api.github.com/users/{username}/repos"
    response = requests.get(url)

    if response.status_code != 200:
        return jsonify({"error": "GitHub user not found"})

    repos = response.json()

    repo_names = []
    languages = set()

    for repo in repos[:5]:
        repo_names.append(repo["name"])
        if repo["language"]:
            languages.add(repo["language"])

    trust_score = 60 + len(repos)

    return jsonify({
        "trust_score": trust_score,
        "repos": repo_names,
        "languages": list(languages)
    })


if __name__ == "__main__":
    app.run(debug=True)