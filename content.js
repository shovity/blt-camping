console.log('== camping on!')

const sleep = (ms) => {
    return new Promise((resovle) => {
        setTimeout(() => {
            resovle ()
        }, ms)
    })
}

const booking = async () => {
    console.log('== booking')

    // Go to ticket detail page
    {
        const buy = document.querySelector('[buttontype="buy-ticket"]') || document.querySelector('[buttontype="buy-ticket-other-show"]')

        if (buy) {
            return buy.click()
        }
    }

    // Go to shoping card
    if (/\/ticket-booking\//.test(location.href)) {
        const selector = '[ng-click="increaseTicketQuantity(ticketType)"]:not(.disabled)'

        while (!document.querySelector(selector)) {
            await sleep(100)
        }

        while (document.querySelector(selector)) {
            const buttons = document.querySelectorAll(selector)
            buttons[buttons.length - 1].click()
        }

        await sleep(900)

        document.querySelector('[ng-click="submitTicketInfo()"]').click()        
    }
}

const gogo = async () => {
    console.log('== gogo')

    while (Date.now() < new Date('2023-07-07T04:59:58.000Z')) {
        await sleep(1000)
        console.log('== waiting to open')
    }

    for (let i = 0; i < 20; i++) {
        document.querySelector('.flex.flex-col.justify-start.relative.w-full.items-center.rounded > div').click()
        await sleep(100)
    }

    location.reload()
}

if (location.host === 'ticketbox.vn') {
    booking()
}

if (location.host === 'blackpinkhanoi2023.com') {
    gogo()
}