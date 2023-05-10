const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(e) {
    e.preventdefault()

    const $target = e.target,
       to = $target.querySelector('#to').value,
       subject = $target.querySelector('#subject').value, 
       message = $target.querySelector('#message').value

    const response = await fetch('http://localhost:3005/api/email', {
        method: 'POST',
        body: JSON.stringify({
            to,
            subject,
            message
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    }),
    data = await response.json()

    if (response.status ===200) {
        alert(data.message)
        $form.reset()
    } else {
        alert(data.message)
    }

}