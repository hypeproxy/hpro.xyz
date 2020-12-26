from flask import Flask, request, jsonify

app = Flask(__name__)


@app.route('/', methods=["GET"])
@app.route('/ip', methods=["GET"])
def get_ip():
    return request.headers.get("X-Forwarded-For")


@app.route('/useragent', methods=["GET"])
@app.route('/user-agent', methods=["GET"])
def get_user_agent():
    return request.headers.get("User-Agent")


@app.route('/headers', methods=["GET"])
def get_headers():
    return jsonify(dict(request.headers))


if __name__ == '__main__':
    app.run()
