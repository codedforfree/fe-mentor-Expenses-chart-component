fetchData();

// Get data from json
function fetchData() {
    fetch("../data.json")
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            renderData(data);
        })
        .catch((error) => console.log(error));
}

// Set styles with tailwind
const bar = {
    block: " w-[33px] md:w-[50px] relative group [&>*]:duration-300 hover:cursor-pointer",
    amount: "opacity-0 group-hover:opacity-100 bg-dark-brown text-lg leading-[23.44px] pt-[8px] pb-[9px] pl-[7.74px] pr-[8.26px] rounded-[5px] absolute bottom-full left-1/2 text-white font-bold -translate-y-2 -translate-x-1/2",
    chart: "bg-soft-red rounded-[3px] group-hover:bg-[#FF9B86]",
    day: "text-center text-xs leading-[15.62px] mt-[11px] text-medium-brown md:text-[15px] md:leading-[19.53px]"
};

function renderData(data) {
    const chart = document.querySelector('[data-chart]');

    data.forEach((el, index) => {
        // Set variabales
        const barHtml = ` 
        <div class="bar ${bar.block}"> 
            <div class="bar__amount ${bar.amount}">$${el.amount}</div>
            <div class="bar__chart ${bar.chart}" style="height:${Math.ceil(el.amount * 2.864)}px"></div>
            <p class="bar__day ${bar.day}">${el.day}</p>
        </div>
        `
        const today = new Date().getDay();
        const barEl = document.createRange().createContextualFragment(barHtml);
        const chartEL = barEl.querySelector('.bar__chart');
        // Set correct highlight
        if (index !== 6) {
            if (index + 1 === today) {
                chartEL.classList.remove('group-hover:bg-[#FF9B86]');
                chartEL.classList.add('bg-cyan');
                chartEL.classList.add('group-hover:bg-[#B4E0E5]');
            }
        } else {
            if (today === 0) {
                chartEL.classList.remove('group-hover:bg-[#FF9B86]');
                chartEL.classList.add('bg-cyan');
                chartEL.classList.add('group-hover:bg-[#B4E0E5]');
            }
        }
        // Append barEl to Chart
        chart.appendChild(barEl);
    });
};