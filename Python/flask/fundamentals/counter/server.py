from flask import Flask, render_template, redirect, session

app = Flask(__name__)
app.secret_key = 'root'

# our index route will handle rendering our form
@app.route('/')
def root():
    if 'cnt' not in session:
        session['cnt'] = 0
    else:
        session['cnt'] += 1
    return render_template("index.html")

# ------  BREAD CRUMB HERE!!!  ---------
# @app.route('/<int:value>',)


@app.route('/counter', methods=['POST'])
def create_user():
    print('Yay!!! You are counting!!!')
    # session['cnt'] += 1
    return redirect("/")


@app.route('/reset', methods=['POST'])
def create_reset():
    session.clear()
    return redirect("/")


if __name__=="__main__":
    app.run(debug=True)
