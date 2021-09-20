from flask import Flask,render_template
app= Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/instructions.html')
def instructions():
    return render_template('instructions.html')

if __name__ =="__main__":
    app.run(debug=True)