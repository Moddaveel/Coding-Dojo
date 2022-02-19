from flask import Flask, render_template
# import the class from friend.py
app = Flask(__name__)
from friend import Friend


@app.route("/")
def index():
    # call the get all classmethod to get all friends
    friends = Friend.all_friends()
    print(friends)
    return render_template("index.html", all_friends = friends)

if __name__ == "__main__":
    app.run(debug=True)

