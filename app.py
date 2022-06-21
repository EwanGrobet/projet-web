import flask
app = flask.Flask("fruits")


def add_notes(note_value):
    note = note_value
    file = open("avis.txt", "a")
    file.write("----\n" + note + "\n")
    file.close()


def get_notes():
    notedb = open("avis.txt")
    content = notedb.read()
    notedb.close()
    notes = content.split("\n")
    notes.pop(len(notes) - 1)
    return notes


def get_html(page_name):
    html_file = open(page_name + '.html')
    content = html_file.read()
    html_file.close()
    return content


@app.route("/")
def homepage():
    return get_html("avis")


@app.route("/add")
def add():
    note_value = flask.request.args.get("q")
    add_notes(note_value)
    return get_html("avis")


@app.route("/adding")
def adding():
    note_value = flask.request.args.get("jadoreca")
    add_notes(note_value)
    return get_html("comm")


@app.route("/search")
def search():
    html_page = get_html("user_search")
    query = flask.request.args.get("search")
    notes = get_notes()
    result = ""

    for note in notes:
        if note.lower().find(query.lower()) != -1:
            result += "<p>" + note + "</p>"

    if result == "":
        result = "<p>No results found</p>"
    return html_page.replace("$$NOTES$$", result)


@app.route("/comm")
def notes():
    html_page = get_html("comm")
    notes = get_notes()
    result = ""
    for note in notes:
        result += '<p class="comm">' + note + '</p>'

    if result == "":
        result = "<p>No notes available</p>"
    return html_page.replace("$$COMM$$", result)
