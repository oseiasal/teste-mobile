const FormsScreen = require('../pageobjects/forms.screen')

describe('Preencher o formulário', () => {
    it('Tentar acessar e preencher os campos da tela de formulário', async () => {
        await FormsScreen.goToForm()

        await FormsScreen.editForm('Vai parmera')
    });
});