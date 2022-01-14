const form = new Form('.mySwiper', {

})

form.step({
    template: '#slide-start-template'

}).step({
    name: 'konu',
    type: 'radio',
    title: 'What is your message about?',
    required: true,
    span: '',  
    values: {
        '1': 'Online accounting software',         
        'other': 'Other'
    },
    beforeNext: function () {
        if (form.value('other')) {
            form.step({
                name: 'other_url',
                title: 'Explain in one sentence?',
                type: 'textarea',
                placeholder: 'Type here..',
                required: true,
                span: '',
                
            }, true)
        }
        form.next()
    }

}).step({
    name: 'name',
    title: 'What&apos;s your name?',
    span: 'Let&apos;s grab your contact details so we can get back to you',
    required: true,
    autofocus: true,
    placeholder: 'Type here..',

     
})

    .step({
    id:'gonder',
    name: 'email',
    title: 'Could you let us know your email address?',
    span: '',
    required: true,
        autofocus: true,
        placeholder: 'Type here..',

    })

form.end(function () {

    form.submit(function () {
        form.step({
            template: '#slide-end-template'
        }).next()
    })
})


form.start()