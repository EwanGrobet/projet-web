import flask
app = flask.Flask("fruits")

# adding the comment 
# open the txt and add the user text with the "a"
def add_notes(comm_value):
    comm = comm_value
    file = open("avis.txt", "a")
    file.write("----\n" + comm + "\n")
    file.close()

#read the content with "read"
def get_notes():
    notedb = open("avis.txt")
    content = notedb.read()
    notedb.close()
    notes = content.split("\n")
    notes.pop(len(notes) - 1)
    return notes

#setup all the page html for the app route
def get_html(page_name):
    html_file = open(page_name + '.html')
    content = html_file.read()
    html_file.close()
    return content


@app.route("/")
def homepage():
    return get_html("avis")

#all the balise html with an option name/or id="q" are added to the txt
@app.route("/add")
def add():
    comm_value = flask.request.args.get("q")
    add_notes(comm_value)
    return get_html("avis")


@app.route("/adding")
def adding():
    comm_value = flask.request.args.get("jadoreca")
    add_notes(comm_value)
    return get_html("comm")

#adding all the comments in a specifique place in the page comm
@app.route("/comm")
def notes():
    html_page = get_html("comm")
    notes = get_notes()
    result = ""
    for note in notes:
        result += '<p class="comm">' + note + '</p>'

    if result == "":
        result = "<p>No notes available</p>"
        #replace the template $$COMM$$ with the avis.txt
    return html_page.replace("$$COMM$$", result)
