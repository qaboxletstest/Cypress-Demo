describe('WEB ELEMENT COMMANDS - GET, CONTAINS & DOM TRAVERSING METHODS', () => {

    beforeEach(() => {

        cy.visit('http://127.0.0.1:5500/Help%20Folder/cygetcontains.html')

    })

    it('GET - SINGLE ELEMENT', () => {

        cy.get('input[name="Channel Name"]').type('QA BOX LET\'S TEST')
        // cy.get('input[name="date"]').type('17-07-2020')
        cy.get('input[name="date"]').type('2020-07-17')

    })

    it('GET - Limit Scope - Example, scope is changed to fieldset(id="GETCOMMAND") from Document', () => {

        // cy.get('button').click({ multiple: true }) // errors out

        cy.get('fieldset#GETCOMMAND').within(div => {

            cy.get('button').click({ multiple: true })

        })

    })

    it('GET - MULTIPLE ELEMENT - PART 1', () => {

        // cy.get('button').click() // errors out

        cy.get('button').should('have.length', '9') // Length

        cy.get('button').first().click()

        cy.get('button').eq(1).click() // From Start

        cy.get('button').eq(-1).click() // From End

        cy.get('button').last().click()

    })
    it('GET - MULTIPLE ELEMENT - PART 2', () => {

        // OTHER DOM TRAVERSING METHODS ARE - children, closest, find, filter,

        // next, nextAll, nextUntil, prev, prevAll, prevUntil, siblings, not,

        // parent, parents, parentUntil, each

       // cy.get('fieldset#GETCOMMAND').within(div => {

        //     cy.get('button').check({ multiple: true })

        // })

        cy.get('fieldset#GETCOMMAND').children().last().find(':checkbox').check({ multiple: true })

        cy.get(':checkbox').parent().prev().find(':button').first().click()

        cy.reload()

        cy.get(':checkbox').eq(2).siblings(':checkbox').check({ multiple: true })

        cy.reload()

        cy.get(':button').each(btn => {

            btn.hide()

        })

        cy.get('span').each(spn => {

            cy.log(spn.text())

        })
    })
    it('CONTAINS with Text', () => {
        
        cy.contains('SPAN ONE').click()

        cy.contains('SPAN TWO').click()

    })
    it('CONTAINS with Text & Selector', () => {

        // cy.contains('span', 'FIND ME').click()

        // cy.contains('button', 'FIND ME').click()

        cy.get('span:contains("FIND ME")').click()

    })
    it('CONTAINS with Value', () => {

        cy.get('form').contains('Submit the form').click()

    })

    it('CONTAINS with RegEx', () => {

        // cy.contains('Add').click() //Always clicks the first button

        cy.contains(/^add$/i).click() // Clicks the second button now

    })

    it.only('CONTAINS - Element preference order', () => {

        cy.contains('Search').click()

    })

})

