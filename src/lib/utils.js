module.exports = {
  date(timestamp) {
    const date = new Date(timestamp)
    // yyyy
    const year = date.getUTCFullYear()

    // mm
    const month = `0${date.getUTCMonth() + 1}`.slice(-2)

    // dd
    const day = `0${date.getUTCDate()}`.slice(-2)

    return {
      day,
      month,
      year,
      iso:`${year}-${month}-${day}`,
      birthday:`${day}/${month}`,
      format: `${day}/${month}/${year}`,
    }

  },
  formatPrice(price){
    return new Intl.NumberFormat('pt-MZ',{
      style: 'currency',
      currency: 'MZN'
  }).format(price/100)
  }
};
