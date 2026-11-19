from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return "Flask Backend is running!"

@app.route('/submit', methods=['POST'])
def submit():

    data = request.get_json()

    name = data.get('name')
    email = data.get('email')

    print("Name:", name)
    print("Email:", email)

    return jsonify({
        "message": "Data received successfully!"
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)