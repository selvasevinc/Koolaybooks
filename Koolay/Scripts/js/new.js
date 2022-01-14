const form = new Form('.mySwiper', {

})

form.step({
    template: '#slide-start-template'

}).step({
    name: 'konu',
    type: 'radio',
    title: 'Görüşmek istediğiniz konu?',
    required: true,
    span: '',
    values: {
        '1': 'Online muhasebe programı',
        'other': 'Diğer'
    },
    beforeNext: function () {
        if (form.value('other')) {
            form.step({
                name: 'other_url',
                title: 'Bir cümleyle açıklayınız?',
                type: 'textarea',
                required: true,
                span: '',
                placeholder: 'Buraya yazın..',

            }, true)
        }
        form.next()
    }

}).step({
    name: 'name',
    title: 'Adınız nedir?',
    span: 'Size geri dönebilmemiz için lütfen bilgilerinizi giriniz.',
    required: true,
    placeholder: 'Buraya yazın..',
    autofocus: true,

})

    .step({
        id: 'gonder',
        name: 'email',
        title: 'email adresiniz?',
        span: '',
        placeholder: 'Buraya yazın..',
        required: true,
        autofocus: true,
    })

form.end(function () {

    form.submit(function () {
        form.step({
            template: '#slide-end-template'
        }).next()
    })
})


form.start()