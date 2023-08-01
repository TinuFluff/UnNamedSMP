"use strict";
fetch('./staff.json')
    .then(response => response.json())
    .then(async (staffArray) => {
    let innerHTML = '';
    let badges = {
        'STAFF': 'https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/discordstaff.svg',
        'PARTNER': 'https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/discordpartner.svg',
        'BUGHUNTER': 'https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/discordbughunter1.svg',
        'HOUSE_BRAVERY': 'https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/hypesquadbravery.svg',
        'HOUSE_BRILLIANCE': 'https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/hypesquadbrilliance.svg',
        'HOUSE_BALANCE': 'https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/hypesquadbalance.svg',
        'EARLY_SUPPORTER': 'https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/discordearlysupporter.svg',
        'CERTIFIED_MODERATOR': 'https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/discordmod.svg',
        'ACTIVE_DEVELOPER': 'https://raw.githubusercontent.com/mezotv/discord-badges/main/assets/activedeveloper.svg'
    };
    for (let staff of staffArray) {
        let userRes = await fetch(`https://discordlookup.mesavirep.xyz/v1/user/${staff.id}`);
        let user = await userRes.json();
        let html = `
            <div class='relative overflow-hidden rounded-md bg-dark-grey'>
                <div class='w-64 h-48 flex flex-col relative'>
                    <div class='flex items-center justify-center w-full h-full'>
                        <div class='w-full h-full bg-light-grey scale-105 inset-0 opacity-80 blur-sm z-10' style='background: url(${user.banner.link ? user.banner.link : user.avatar.link}) center center/cover no-repeat'></div>
                        <img src=${user.avatar.link} alt='Guild Icon' width='64' height='64' class='rounded-full absolute z-20 bg-darker-grey text-neutral-950'/>
                    </div>
                    <div class='flex flex-col items-start justify-center w-full z-20 p-4 bg-dark-grey'>
                        <div class='flex items-start justify-between w-full'>
                            <span class='truncate font-poppins font-semibold select-none text-lg'>${user.global_name}</span>
                            <span class='flex items-center justify-center'>${user.badges.map(badge => { return `<img src='${badges[badge]}' height='20' width='20' class='w-5 h-5 m-0.5'>`; }).toString().replaceAll(',', '')}</span>
                        </div>
                        <div>
                            <span class='truncate text-base font-mono font-semibold select-none text-light-grey'>${staff.rank}</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
        innerHTML += html;
        console.log(user);
    }
    let staffList = document.getElementById('staffList');
    staffList.innerHTML = innerHTML;
});
