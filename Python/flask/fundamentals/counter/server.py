from flask import Flask, render_template, request, redirect, session

app = Flask(__name__)
app.secret_key = 'root'
# our index route will handle rendering our form
@app.route('/')
def index():
    if 'cnt' in session:
        session['cnt'] += 1
    else:
        session['cnt'] = 1
    return render_template("index.html")

@

@app.route('/counter', methods=['POST'])
def create_user():

    return redirect("/")
