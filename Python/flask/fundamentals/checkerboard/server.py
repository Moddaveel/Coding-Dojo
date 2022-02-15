from shlex import join
from flask import Flask, render_template
app = Flask(__name__)

@app.route('/')
def eightSquares():
    return render_template("index.html", rows=8, columns=8)

@app.route('/<int:rows>/<int:columns>')
def defineSquares(j, k):
    return render_template("index.html"), rows=int(j), columns=int(k)

if __name__ == '__main__':
    app.run(debug=True)