const individualRadio = document.getElementById('inlineRadioIndividual');
const companyRadio = document.getElementById('inlineRadioCompany');
const companyInput = document.getElementById('company-input');
const companyBlock = document.getElementById('companyBlock');
const company = document.getElementById('company');

window.onload = function () {

    var chart = new CanvasJS.Chart("chartContainer", {
        exportEnabled: false,
        animationEnabled: true,
        title:{
            text: "Diagramme des skills"
        },
        legend:{
            cursor: "pointer",
            itemclick: explodePie
        },
        data: [{
            type: "pie",
            showInLegend: false,
            toolTipContent: "<strong>{y}%</strong>",
            indexLabel: "{name}",
            dataPoints: [
                { y: 20, name: "- Développement" },
                { y: 18, name: "Linux -" },
                { y: 4, name: "Cloud -" },
                { y: 8, name: "DevOps -" },
                { y: 12, name: "Design -" },
                { y: 17, name: "Agilité -" },
                { y: 21, name: "- Architecture", exploded: true }
            ]
        }]
    });

    chart.render();
}

function explodePie (e) {
    if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
        e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
    } else {
        e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
    }
    
    e.chart.render();
}

companyBlock.addEventListener('click', (e) => {        
    if (individualRadio.contains(e.target) && individualRadio.checked) {
        companyInput.removeAttribute('required');

        if (!company.classList.contains('none')) {
            company.classList.add('none');
        }
    }

    if (companyRadio.contains(e.target) && companyRadio.checked) {
        companyInput.setAttribute('required', '');
        company.classList.remove('none');
    }
});

document.getElementById('contactForm').addEventListener('submit', async function(e) {
    e.preventDefault();

    const data = {
        is_company: !!document.getElementById('inlineRadioCompany').checked,
        company: document.getElementById('company-input').value,
        gender: document.getElementById('inlineRadioFemale').checked ? 'Madame' : 'Monsieur',
        firstname: document.getElementById('firstname-input').value,
        lastname: document.getElementById('lastname-input').value,
        email: document.getElementById('email-input').value,
        subject: document.getElementById('subject-input').value,
        message: document.getElementById('message-input').value
    };

    try {
        const response = await fetch('https://api.digital-daily.fr/api/commands', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const result = await response.json();

        if (response.ok) {
            document.getElementById('message').innerHTML =
                '<div class="alert alert-success">Message envoyé ✅</div>';
        } else {
            document.getElementById('message').innerHTML =
                '<div class="alert alert-danger">' + (result.message || 'Erreur') + '</div>';
        }

    } catch (error) {
        console.error(error);
        document.getElementById('message').innerHTML =
            '<div class="alert alert-danger">Erreur serveur</div>';
    }

    setTimeout(() => {
        document.getElementById('message').innerHTML = '';
    }, 3000);
});
