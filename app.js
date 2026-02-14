document.addEventListener('DOMContentLoaded', () => {
    // Elements
    const splashScreen = document.getElementById('splash-screen');
    const appScreen = document.getElementById('app-screen');
    const startBtn = document.getElementById('start-btn');
    const fileInput = document.getElementById('file-input');
    const uploadSection = document.getElementById('upload-section');
    const analysisSection = document.getElementById('analysis-section');
    const resultSection = document.getElementById('result-section');
    const analysisStatus = document.getElementById('analysis-status');
    const analysisDetail = document.getElementById('analysis-detail');
    const historyBtn = document.getElementById('history-btn');
    const closeHistoryBtn = document.getElementById('close-history-btn');
    const historyOverlay = document.getElementById('history-overlay');
    const historyList = document.getElementById('history-list');

    // Mock Data for "Monstera Deliciosa"
    const mockDiagnosis = {
        name: "몬스테라 델리시오사",
        healthScore: 2, // 1-5
        healthStatus: "주의 필요",
        diagnosis: "하엽(아래쪽 잎)부터 노랗게 변하는 것으로 보아 <strong>과습(Overwatering)</strong>이 의심됩니다. 뿌리의 호흡이 원활하지 않은 상태입니다.",
        care: {
            water: "당분간 물 주기 중단! 흙이 바싹 마를 때까지 기다려주세요.",
            sun: "통풍이 잘 되는 반양지로 옮겨 수분 증발을 도와주세요.",
            temp: "20~25도 유지 권장 (추위에 약해요)"
        },
        message: "식물도 숨을 쉬어야 해요! 지금은 물을 주는 사랑보다는, '기다려주는 사랑'이 필요한 때입니다. 흙이 보송보송해질 때까지 조금만 참아주시면 곧 다시 싱그러운 초록빛을 보여줄 거예요. 힘내세요! 🌿"
    };

    // Splash Screen Transition
    startBtn.addEventListener('click', () => {
        splashScreen.classList.remove('active');
        appScreen.classList.add('active');
    });

    // History Event Listeners
    historyBtn.addEventListener('click', () => {
        showHistory();
    });

    closeHistoryBtn.addEventListener('click', () => {
        historyOverlay.classList.add('hidden');
    });

    // File Input Handler
    fileInput.addEventListener('change', (e) => {
        if (e.target.files && e.target.files[0]) {
            startAnalysis(e.target.files[0]);
        }
    });

    // Simulation Logic
    function startAnalysis(file) {
        // Hide upload, show loader
        uploadSection.classList.add('hidden');
        analysisSection.classList.remove('hidden');
        resultSection.classList.add('hidden'); // Ensure result is hidden

        const steps = [
            { msg: "사진을 분석하고 있습니다...", detail: "잎의 형태와 색상을 스캔 중" },
            { msg: "식물 품종 식별 중...", detail: "데이터베이스와 대조하고 있습니다" },
            { msg: "건강 상태 진단 중...", detail: "잎 처짐과 변색 패턴 분석" },
            { msg: "처방전 작성 중...", detail: "맞춤형 관리법을 생성합니다" }
        ];

        let stepIndex = 0;

        const interval = setInterval(() => {
            if (stepIndex < steps.length) {
                updateAnalysisStatus(steps[stepIndex]);
                stepIndex++;
            } else {
                clearInterval(interval);
                showResult();
            }
        }, 1500); // Change step every 1.5s
    }

    function updateAnalysisStatus(step) {
        analysisStatus.textContent = step.msg;
        analysisDetail.textContent = step.detail;
        analysisStatus.style.opacity = 0;
        analysisDetail.style.opacity = 0;

        setTimeout(() => {
            analysisStatus.style.opacity = 1;
            analysisDetail.style.opacity = 1;
        }, 100);
    }

    function showResult() {
        analysisSection.classList.add('hidden');
        resultSection.classList.remove('hidden');
        saveToHistory(mockDiagnosis);
        renderResult(mockDiagnosis);
    }

    function saveToHistory(data) {
        const history = JSON.parse(localStorage.getItem('plant_diagnosis_history') || '[]');
        const newRecord = {
            ...data,
            date: new Date().toLocaleDateString('ko-KR', { month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' })
        };
        history.unshift(newRecord); // Add to beginning
        localStorage.setItem('plant_diagnosis_history', JSON.stringify(history.slice(0, 20))); // Keep last 20
    }

    function showHistory() {
        const history = JSON.parse(localStorage.getItem('plant_diagnosis_history') || '[]');
        historyOverlay.classList.remove('hidden');

        if (history.length === 0) {
            historyList.innerHTML = '<p style="text-align: center; color: var(--text-light); margin-top: 2rem;">저장된 진단 기록이 없습니다.</p>';
            return;
        }

        historyList.innerHTML = history.map(item => `
            <div class="history-item">
                <div class="history-info">
                    <h4>${item.name}</h4>
                    <div class="history-date">${item.date}</div>
                </div>
                <div class="history-badge">${item.healthStatus}</div>
            </div>
        `).join('');
    }

    function resetApp() {
        resultSection.classList.add('hidden');
        uploadSection.classList.remove('hidden');
        fileInput.value = ''; // Reset file input
    }

    // Expose resetApp to window so it can be called from inline onclick (though we should avoid inline JS)
    window.resetApp = resetApp;

    function renderResult(data) {
        // Generate Health Dots
        let dotsHtml = '';
        for (let i = 1; i <= 5; i++) {
            dotsHtml += `<div class="dot ${i <= data.healthScore ? 'filled' : ''}"></div>`;
        }

        const html = `
            <div class="card glass" style="animation: fadeIn 0.5s ease">
                <div class="plant-header">
                    <span class="plant-name">${data.name}</span>
                    <span class="health-badge warning">${data.healthStatus}</span>
                </div>
                
                <div style="margin-bottom: 0.5rem; font-size: 0.9rem; color: #666;">현재 건강도</div>
                <div class="health-bar">
                    ${dotsHtml}
                </div>

                <div class="diagnosis-text">
                    <i class="fa-solid fa-stethoscope" style="margin-right: 8px; color: var(--primary-color);"></i>
                    ${data.diagnosis}
                </div>

                <h3 style="margin-bottom: 1rem; color: var(--primary-color);">📋 오늘의 관리 처방</h3>
                
                <div class="care-grid">
                    <div class="care-item">
                        <div class="care-icon"><i class="fa-solid fa-droplet"></i></div>
                        <div class="care-info">
                            <h4>물 주기</h4>
                            <p>${data.care.water}</p>
                        </div>
                    </div>
                    
                    <div class="care-item">
                        <div class="care-icon"><i class="fa-solid fa-sun"></i></div>
                        <div class="care-info">
                            <h4>햇볕</h4>
                            <p>${data.care.sun}</p>
                        </div>
                    </div>

                    <div class="care-item">
                        <div class="care-icon"><i class="fa-solid fa-temperature-half"></i></div>
                        <div class="care-info">
                            <h4>적정 온도</h4>
                            <p>${data.care.temp}</p>
                        </div>
                    </div>
                </div>

                <div class="botanist-note">
                    <p>${data.message}</p>
                </div>

                <button class="btn-primary" style="width: 100%; margin-top: 2rem; justify-content: center;" onclick="resetApp()">
                    <i class="fa-solid fa-camera"></i> 다른 식물 진단하기
                </button>
            </div>
        `;

        resultSection.innerHTML = html;
    }
});
