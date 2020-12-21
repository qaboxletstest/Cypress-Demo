describe('File Upload Suite', () => {
    it('Single File Upload - Light Dom', () => {
        cy.visit('http://127.0.0.1:5500/Help%20Folder/fileupload.html')
        cy.get('input#file-upload1').attachFile('dog.jpg')
        cy.get('span#fileName1').should('have.text', "dog.jpg")
    });

    it('Single File Upload - Shadow Dom', () => {
        cy.visit('http://127.0.0.1:5500/Help%20Folder/fileupload.html')
        cy.get('button').click()
        cy.get('input#file-upload2', { includeShadowDom: true }).attachFile('dog.jpg', { force: true })
        cy.get('span#fileName2', { includeShadowDom: true }).should('have.text', "dog.jpg")
    });

    it('File Upload - Drag Drop', () => {
        cy.visit('https://css-tricks.com/examples/DragAndDropFileUploading/')
        cy.get('#file').attachFile('yey.jpg', { subjectType: 'drag-n-drop' })
    });


    it.only('Image File Upload - Drag Drop', () => {
        cy.visit('http://127.0.0.1:5500/Help%20Folder/fileupload.html')
        // cy.get('div#holder').attachFile('yey.jpg')
        cy.get('div#holder').attachFile('yey.jpg', { subjectType: 'drag-n-drop' })
    });

    it('Multiple File Upload - Drag Drop', () => {
        cy.visit('http://127.0.0.1:5500/Help%20Folder/fileuploaddragdrop.html')
    });
});