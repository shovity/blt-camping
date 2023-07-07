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

    while (Date.now() < new Date('2023-07-07T07:59:58.000Z')) {
        await sleep(1000)
        console.log('== waiting to open')
    }

    let count = 0

    for (let i = 0; i < 1e9999; i++) {
        document.querySelectorAll('.flex.flex-col.justify-start.relative.w-full.items-center.rounded > div')[1].click()
        await sleep(50)

        if (count++ > 30) {
            count = 0
            location.reload()
        }
    }
}

if (location.host === 'ticketbox.vn') {
    // booking()
}

if (location.host === 'blackpinkhanoi2023.com') {
    gogo()
}