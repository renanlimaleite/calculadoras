function criaCalculadora() {
  return {

    display: document.querySelector('.display'),

    init() {
      this.clickButton()
      this.keyPress()
    },

    keyPress() {
      this.display.addEventListener('keyup', e => {
        if (e.keyCode === 13) {
          this.count();
        }

        if (e.keyCode === 8) {
          this.deleteOne()
        }
      });

      // OUTRA MANEIRA DE REALIZAR.
      // document.addEventListener('keyup', e => {
      //   if (e.key === 'Enter') {
      //     this.count()
      //   }

      //   if (e.key === 'Backspace') {
      //     this.deleteOne()
      //   }
      // });
    },

    // 1º forma SEM ARROW FUNCTION, PRECISAMOS UTILIZAR BIND NO THIS QUANDO NECESSÁRIO.
    // clickButton() {
    //   // this -> calculadora
    //   document.addEventListener('click', function (event) {
    //     const el = event.target

    //     if (el.classList.contains('btn-num')) {
    //       // this -> document, então amarramos no final dessa função o this da calculadora, utilizando .bind(), para o this.buttonForDisplay() enxergar
    //       // o escopo do objeto.
    //       this.buttonForDisplay(el.innerText)
    //     }

    //   }.bind(this))
    // },

    // 2º FORMA, COM ARROW FUNCTION, DESSA FORMA O THIS SEMPRE SERÁ O OBJETO.
    clickButton() {
      // this -> calculadora
      document.addEventListener('click', (event) => {
        const el = event.target

        if (el.classList.contains('btn-num')) {
          this.buttonForDisplay(el.innerText)
        }

        if (el.classList.contains('btn-clear')) {
          this.clearDisplay()
        }

        if (el.classList.contains('btn-del')) {
          this.deleteOne()
        }

        if (el.classList.contains('btn-eq')) {
          this.count()
        }

        this.display.focus()
      })
    },

    buttonForDisplay(val) {
      this.display.value += val
    },

    clearDisplay() {
      this.display.value = ''
    },

    deleteOne() {
      this.display.value = this.display.value.slice(0, -1)
    },



    count() {
      // EVAL É PRA EXECUTAR UM CODIGO JAVASCRIPT
      let count = this.display.value

      try {
        count = eval(count)

        if (!count) {
          alert('Conta inválida')
          return
        }

        this.display.value = String(count);
      } catch (e) {
        alert('Conta inválida')
        return
      }
    },


  }
}

const calculadora = criaCalculadora()
calculadora.init()