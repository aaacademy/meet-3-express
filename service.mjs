export class Service {
    notes = [{
        id: 1,
        title: 'Note 1',
    }];

    getNotes(request, response) {
        this._responseFormat(response, 200, 'OK', this.notes);
    }

    addNote(request, response) {
        request.addListener('data', (chunk) => {
            const note = JSON.parse(chunk);
            note.id = this.notes.length + 1;
            note.title = note.title;
            this.notes.push(note);
            this._responseFormat(response, 201, 'Created', note);
        });
    }

    _responseFormat(response, code, message, data) {
        response.writeHead(code, {'Content-Type': 'application/json'});
        response.write(
            JSON.stringify({
                code: code,
                message: message,
                data: data,
            })
        );
        response.end();
    }

}