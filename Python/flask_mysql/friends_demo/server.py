from flask import Flask, render_template
# import the class from friend.py
app = Flask(__name__)
from friend import Friend


@app.route("/")
def index():
    # call the get all classmethod to get all friends
    friends = Friend.all_friends()
    return render_template("index.html", all_friends = friends)

@app.route("/<int:friend_id>")
def show_friend(friend_id):
    data={
        "id": friend_id
    }
    friend = Friend.one_friend(data)
    return render_template("show_one.html", friend = friend)














if __name__ == "__main__":
    app.run(debug=True)

