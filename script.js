document.addEventListener('DOMContentLoaded', () => {
    // ---- Data Awal Siswa ----
    let students = [
        { name: "Syaila", schedule: ["Selasa, 07.30-09.00", "Rabu, 07.30-09.00", "Kamis, 07.30-09.00"] },
        { name: "Raffan", schedule: ["Selasa, 07.30-09.00", "Rabu, 07.30-09.00", "Kamis, 07.30-09.00"] },
        { name: "Raina", schedule: ["Selasa, 11.00-12.30", "Rabu, 11.00-12.30", "Jum'at, 11.00-12.30"] },
        { name: "Luthfi", schedule: ["Selasa, 11.00-12.30", "Rabu, 11.00-12.30", "Kamis, 11.00-12.30"] },
        { name: "Riko", schedule: ["Kamis, 11.00-12.30", "Jum'at, 07.30-09.00", "Sabtu, 07.30-09.00"] },
        { name: "Dhita", schedule: ["Senin, 14.00-15.30", "Selasa, 14.00-15.30", "Rabu, 19.00-20.30"] },
        { name: "Hanan", schedule: ["Senin, 19.00-20.30", "Selasa, 19.00-20.30", "Kamis, 19.00-20.30"] },
        { name: "Hanif", schedule: ["Senin, 19.00-20.30", "Selasa, 19.00-20.30", "Kamis, 19.00-20.30"] },
        { name: "Mia", schedule: ["Senin, 12.30-14.00", "Kamis, 12.30-14.00", "Jum'at, 15.30-17.00"] },
        { name: "Zigar", schedule: ["Selasa, 15.30-17.00"] },
        { name: "Alika", schedule: ["Rabu, 07.30-09.00"] },
        { name: "Faffan", schedule: ["Selasa, 12.30-14.00"] },
        { name: "Ashila", schedule: ["Senin, 12.30-14.00", "Selasa, 12.30-14.00", "Jum'at, 11.00-12.30"] },
        { name: "Aira", schedule: ["Senin, 14.00-15.30", "Selasa, 14.00-15.30", "Rabu, 14.00-15.30"] },
        { name: "Carissa", schedule: ["Senin, 14.00-15.30", "Selasa, 14.00-15.30", "Rabu, 14.00-15.30"] },
        { name: "Asri", schedule: ["Senin, 12.30-14.00", "Selasa, 12.30-14.00", "Jum'at, 11.00-12.30"] },
        { name: "Levi", schedule: ["Senin, 07.30-09.00", "Selasa, 07.30-09.00", "Kamis, 07.30-09.00"] },
        { name: "Faiz", schedule: ["Senin, 12.30-14.00", "Selasa, 12.30-14.00", "Jum'at, 12.30-14.00"] },
        { name: "Aqila", schedule: ["Senin, 15.30-17.00", "Selasa, 15.30-17.00", "Rabu, 15.30-17.00"] },
        { name: "Chandra", schedule: ["Senin, 15.30-17.00", "Selasa, 15.30-17.00"] },
        { name: "Andra", schedule: ["Senin, 12.30-14.00", "Selasa, 12.30-14.00"] },
        { name: "Sarah", schedule: ["Senin, 14.00-15.30", "Selasa, 14.00-15.30", "Rabu, 14.00-15.30"] },
        { name: "Shaqila", schedule: ["Senin, 14.00-15.30", "Selasa, 14.00-15.30", "Kamis, 14.00-15.30"] },
        { name: "Syahla", schedule: ["Senin, 14.00-15.30", "Kamis, 19.00-20.30", "Rabu, 15.30-17.00"] },
        { name: "Aqil", schedule: ["Senin, 15.30-17.00", "Rabu, 15.30-17.00", "Kamis, 15.30-17.00"] },
        { name: "Dean", schedule: ["Senin, 15.30-17.00", "Rabu, 15.30-17.00", "Kamis, 15.30-17.00"] },
        { name: "Abry", schedule: ["Senin, 15.30-17.00", "Selasa, 15.30-17.00"] },
        { name: "Gaga", schedule: ["Senin, 12.30-14.00", "Selasa, 12.30-14.00", "Rabu, 12.30-14.00"] },
        { name: "Kayna", schedule: ["Rabu, 19.00-20.30", "Senin, 19.00-20.30", "Jum'at, 19.00-20.30"] },
        { name: "Farhan", schedule: ["Selasa, 19.00-20.30", "Sabtu, 07.30-09.00"] },
        { name: "Naila", schedule: ["Sabtu, 07.30-09.00", "Selasa, 19.00-20.30"] },
        { name: "Lisanul", schedule: ["Senin, 19.00-20.30", "Rabu, 19.00-20.30", "Jum'at, 19.00-20.30"] },
        { name: "Mutia", schedule: [] },
        { name: "Fathir", schedule: ["Kamis, 19.00-20.30", "Jum'at, 15.00-17.00", "Sabtu, 07.30-09.00"] },
        { name: "Alfira", schedule: [] },
        { name: "Kiswa", schedule: ["Senin, 12.30-14.00", "Selasa, 12.30-14.00", "Kamis, 12.30-14.00"] },
        { name: "Puput", schedule: ["Selasa, 19.00-20.30", "Rabu, 19.00-20.30"] },
        { name: "LIA", schedule: ["Selasa, 19.00-20.30", "Rabu, 19.00-20.30", "Kamis, 19.00-20.30"] },
        { name: "Rafika", schedule: ["Senin, 19.00-20.30", "Rabu, 19.00-20.30"] },
        { name: "Fina", schedule: ["Senin, 15.30-17.00", "Selasa, 15.30-17.00"] },
        { name: "Raka", schedule: ["Selasa, 19.00-20.30", "Kamis, 19.00-20.30", "Jum'at, 19.00-20.30"] },
        { name: "Jibril", schedule: ["Rabu, 19.00-20.30", "Jum'at, 19.00-20.30", "Sabtu, 07.30-09.00"] },
        { name: "Shafa", schedule: ["Rabu, 19.00-20.30", "Jum'at, 19.00-20.30", "Sabtu, 07.30-09.00"] },
        { name: "Bharat", schedule: ["Selasa, 07.30-09.00", "Rabu, 07.30-09.00", "Kamis, 07.30-09.00"] },
        { name: "Adhwa", schedule: ["Senin, 09.00-10.30"] }
    ];

    const days = ["Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu"];
    const times = ["07.30-09.00", "09.00-10.30", "11.00-12.30", "12.30-14.00", "14.00-15.30", "15.30-17.00", "19.00-20.30"];

    // Elemen HTML
    const loginContainer = document.getElementById('login-container');
    const appContainer = document.getElementById('app-container');
    const loginButton = document.getElementById('login-button');
    const passwordInput = document.getElementById('password');
    const loginMessage = document.getElementById('login-message');
    const scheduleTableBody = document.getElementById('schedule-table-body');
    const weeklyScheduleBody = document.getElementById('weekly-schedule-body');
    const summaryButton = document.getElementById('summary-button');
    const summaryOutput = document.getElementById('summary-output');
    const logoutButton = document.getElementById('logout-button');
    const refreshButton = document.getElementById('refresh-button'); // Tombol baru

    // ---- Fungsi Sinkronisasi Data ----
    function syncDataFromWeeklyTable() {
        const newStudentData = {};
        
        weeklyScheduleBody.querySelectorAll('tr').forEach(row => {
            const time = row.querySelector('td:first-child').textContent;
            row.querySelectorAll('td:not(:first-child)').forEach((cell, dayIndex) => {
                const day = days[dayIndex];
                const sessionKey = `${day}, ${time}`;
                
                cell.querySelectorAll('.student-name-input').forEach(input => {
                    const studentName = input.value.trim();
                    if (studentName) {
                        if (!newStudentData[studentName]) {
                            newStudentData[studentName] = { name: studentName, schedule: [] };
                        }
                        if (!newStudentData[studentName].schedule.includes(sessionKey)) {
                            newStudentData[studentName].schedule.push(sessionKey);
                        }
                    }
                });
            });
        });

        // Perbarui array students dengan data yang baru
        students = Object.values(newStudentData);
    }

    // ---- Fungsi Tampilan ----
    function updateAllTables() {
        syncDataFromWeeklyTable();
        displayWeeklySchedule();
        displayStudentSchedule();
    }
    
    // Fungsi untuk menampilkan jadwal siswa (tabel bawah)
    function displayStudentSchedule() {
        scheduleTableBody.innerHTML = '';
        students.forEach((student, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${student.name}</td>
                <td>${student.schedule.join('; ') || 'Tidak ada jadwal'}</td>
                <td>
                    <button class="whatsapp-button" data-name="${student.name}">Kirim WhatsApp</button>
                    <button class="delete-button" data-name="${student.name}">Hapus</button>
                </td>
            `;
            scheduleTableBody.appendChild(row);
        });
        addStudentTableEventListeners();
    }

    // Fungsi untuk menampilkan jadwal perminggu (tabel atas)
    function displayWeeklySchedule() {
        weeklyScheduleBody.innerHTML = '';
        times.forEach(time => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${time}</td>`;
            days.forEach(day => {
                const sessionKey = `${day}, ${time}`;
                const studentsInSession = students.filter(student => student.schedule.includes(sessionKey));
                
                const cell = document.createElement('td');
                
                for (let i = 0; i < 10; i++) {
                    const studentName = (studentsInSession[i] && studentsInSession[i].name) || '';
                    const input = document.createElement('input');
                    input.type = 'text';
                    input.className = 'student-name-input';
                    input.placeholder = `Siswa ${i + 1}`;
                    input.value = studentName;
                    cell.appendChild(input);
                }
                
                const studentCount = studentsInSession.length;
                const capacityInfo = document.createElement('div');
                capacityInfo.className = 'capacity-info';
                capacityInfo.textContent = `(${studentCount}/10)`;
                cell.appendChild(capacityInfo);
                
                row.appendChild(cell);
            });
            weeklyScheduleBody.appendChild(row);
        });
    }
    
    // ---- Fungsi Event Listeners ----
    function addStudentTableEventListeners() {
        // Kirim WhatsApp
        document.querySelectorAll('.whatsapp-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const studentName = e.target.dataset.name;
                const student = students.find(s => s.name === studentName);
                if (student) {
                    const scheduleText = student.schedule.join('\n- ');
                    const message = `Halo ${student.name}, berikut jadwal les Anda:\n\n- ${scheduleText}\n\nTerima kasih.`;
                    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;
                    window.open(whatsappLink, '_blank');
                }
            });
        });

        // Hapus Siswa
        document.querySelectorAll('.delete-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const studentName = e.target.dataset.name;
                if (confirm(`Apakah Anda yakin ingin menghapus ${studentName}?`)) {
                    students = students.filter(s => s.name !== studentName);
                    updateAllTables();
                }
            });
        });
    }

    // ---- Fungsi Login & Logout ----
    loginButton.addEventListener('click', () => {
        const password = passwordInput.value;
        if (password === 'admin') {
            loginContainer.classList.add('hidden');
            appContainer.classList.remove('hidden');
            loginMessage.textContent = '';
            updateAllTables();
        } else {
            loginMessage.textContent = 'Password salah. Silakan coba lagi.';
        }
    });

    logoutButton.addEventListener('click', () => {
        appContainer.classList.add('hidden');
        loginContainer.classList.remove('hidden');
        passwordInput.value = '';
        summaryOutput.value = '';
    });

    // ---- Ringkasan Data ----
    summaryButton.addEventListener('click', () => {
        let summaryText = '--- Ringkasan Jadwal Siswa ---\n\n';
        students.forEach(student => {
            if (student.schedule.length > 0) {
                 summaryText += `${student.name}: ${student.schedule.join(' | ')}\n`;
            } else {
                 summaryText += `${student.name}: (Belum ada jadwal)\n`;
            }
        });
        summaryOutput.value = summaryText;
    });

    // ---- Event Listener untuk Tombol Perbarui ----
    refreshButton.addEventListener('click', () => {
        updateAllTables();
        alert('Data berhasil diperbarui!');
    });

    // Tampilkan halaman login saat aplikasi dimuat
    loginContainer.classList.remove('hidden');
});