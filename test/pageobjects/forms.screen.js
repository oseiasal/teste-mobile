class Forms {

    async goToForm() {
        const formSelector = 'new UiSelector().text("Forms")'
        const button = await $(`android=${formSelector}`)
        await button.click()
    }

    async editForm(texto) {
        const firstInputSelector = 'new UiSelector().text("Type something")'
        const firstInput = await $(`android=${firstInputSelector}`)
        await firstInput.addValue(texto)

        const switchInputSelector = 'new UiSelector().className("android.widget.Switch")'
        const switchInput = await $(`android=${switchInputSelector}`)
        await switchInput.click()

        const optionsSelector = 'new UiSelector().className("android.widget.EditText").instance(1)'
        const options = await $(`android=${optionsSelector}`)
        await options.click()

        const itemSelector = 'new UiSelector().className("android.widget.CheckedTextView").instance(2)'
        const item = await $(`android=${itemSelector}`)
        await item.click()

        const activeButtonSelector = 'new UiScrollable(new UiSelector().scrollable(true).instance(0)).scrollIntoView(new UiSelector().textContains("Active").instance(0))'
        const activeButton = await $(`android=${activeButtonSelector}`)
        await activeButton.click()

    }
}

module.exports = new Forms()