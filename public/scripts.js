const Mask = {
    apply(input, func){
        setTimeout(function(){
            input.value = Mask[func](input.value)
        }, 1)
    },
    formatMZN(value){
        value = value.replace(/\D/g, "")

        return new Intl.NumberFormat('pt-MZ',{
            style: 'currency',
            currency: 'MZN'
        }).format(value/100)


    },
}