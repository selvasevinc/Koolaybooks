class Form {
    steps = []
    current = 0
    letters = ['A', 'B', 'C', 'D', 'E']  

    constructor(swiper) {
        this.form = swiper
        this.swiper = new Swiper(swiper, {
            direction: 'vertical',
            allowTouchMove: false               
        });

        $(document.body).on('keyup', function (e) {
            if (e.key == 'Enter') {
                $('.swiper-slide-active fieldset:valid + .next-button').click()
            }
        })        

        
        $('#gonder').click(function () {
            if (this.id == 'gonder') {
                EnableAjax()=true
            }
            else {   EnableAjax()=false
                
            }
        });

        $(document.body).on('click', '.next-button', function () {             
            if ($('.swiper-slide-next').length) {
                this.swiper.slideNext()
            } else {
                if (this.steps[this.current].hasOwnProperty('beforeNext')) {
                    this.steps[this.current].beforeNext()
                } else {
                    this.next()
                }
            }
        }.bind(this))       
    }

    next(step) {
        if (this.steps[this.current + 1]) {
            this.current += 1
            this.generate(this.steps[this.current])
        } else {
            this.callback()
        }  
    }

    step(step, after = false) {
        if (after) {
            this.steps = [...this.steps.slice(0, this.current + 1), step, ...this.steps.slice(this.current + 1)]
        } else {
            this.steps.push(step)
        } 
        return this
    }      
   
    value(input) {
        let currentStep = this.steps[this.current],
            value
        if (currentStep.type === 'radio') {
            value = $('.swiper-slide-active .form-item:checked').val()
        } else {
            value = $('.swiper-slide-active .form-item').val()
        }
        
        return value === input
    }

    input(step) {
        return `<input 
                type="text"
                name="${step.name}"
                ${step.autofocus ? 'autofocus' : ''} 
                ${step.required ? 'required' : ''} 
                placeholder="${step.placeholder}"/>`
    }
    textarea(step) {
        return `<textarea ${step.required ? 'required' : ''} cols="30" rows="2" 
                placeholder="${step.placeholder}" name="${step.name}"></textarea>`
    }

    radio(step) {
        let html = ''
        let i = 0
        $.each(step.values, (key, value) => {
            html += `<label class="radio">
                    <input class="form-item" type="radio" ${step.required ? 'required' : ''} name="${step.name}" value="${key}">
                    <span class="text">
                        <span class="key">${this.letters[i]}</span>
                        ${value}
                        </span>
                    </label>`
            i++
        })
        return html
    }

    generate(step) {
        let template
        if (step.hasOwnProperty('template')) {
            template = $(step.template).html()
        } else {
            if (!step.hasOwnProperty('type')) {
                step.type = 'input'
            }
           
            let field = this[step.type](step)
            template = $('#slide-template').html()
            template = template
                .replace('{field}', field)
                .replace('{title}', step.title)
                .replace('{span}', step.span)
        }
        this.swiper.appendSlide(template)
        if (this.current > 0) {
            this.swiper.slideNext()
        }
    }

    start() {
        this.generate(this.steps[this.current])
    }

    end(callback) {
        this.callback = callback
    }

    submit(callback) {    

        $(this).ajaxSubmit({
            success: callback
        });           
    }
}