// ============================================================
//  🔒 CONTENT PROTECTION — Sam Makwana Portfolio
//  © 2024 Sam Makwana. All Rights Reserved.
//  Unauthorized copying, saving or reproduction is prohibited.
// ============================================================
(function () {
    'use strict';

    // --- Toast notification helper ---
    function showProtectionToast() {
        if (document.getElementById('_sm_toast')) return;
        const toast = document.createElement('div');
        toast.id = '_sm_toast';
        toast.innerHTML = '🔒 &nbsp; Content is protected &nbsp;|&nbsp; © Sam Makwana';
        Object.assign(toast.style, {
            position: 'fixed',
            bottom: '30px',
            left: '50%',
            transform: 'translateX(-50%) translateY(20px)',
            background: 'linear-gradient(135deg,#1a1a2e,#16213e)',
            color: '#a78bfa',
            padding: '12px 28px',
            borderRadius: '50px',
            border: '1px solid #a78bfa55',
            fontFamily: 'Inter, sans-serif',
            fontSize: '14px',
            fontWeight: '600',
            boxShadow: '0 8px 32px rgba(167,139,250,0.25)',
            zIndex: '999999',
            opacity: '0',
            transition: 'all 0.35s cubic-bezier(.4,0,.2,1)',
            pointerEvents: 'none',
            letterSpacing: '0.5px',
        });
        document.body.appendChild(toast);
        requestAnimationFrame(() => {
            toast.style.opacity = '1';
            toast.style.transform = 'translateX(-50%) translateY(0)';
        });
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(-50%) translateY(20px)';
            setTimeout(() => toast.remove(), 400);
        }, 2500);
    }

    // --- 1. Disable Right-Click ---
    document.addEventListener('contextmenu', function (e) {
        e.preventDefault();
        showProtectionToast();
    });

    // --- 2. Disable Keyboard Shortcuts ---
    document.addEventListener('keydown', function (e) {
        const blocked =
            e.key === 'F12' ||                                          // DevTools
            (e.ctrlKey && e.key === 'u') ||                            // View Source
            (e.ctrlKey && e.key === 's') ||                            // Save Page
            (e.ctrlKey && e.key === 'a') ||                            // Select All
            (e.ctrlKey && e.key === 'p') ||                            // Print
            (e.ctrlKey && e.shiftKey && e.key === 'I') ||             // DevTools
            (e.ctrlKey && e.shiftKey && e.key === 'J') ||             // Console
            (e.ctrlKey && e.shiftKey && e.key === 'C') ||             // Inspect Element
            (e.ctrlKey && e.shiftKey && e.key === 'K') ||             // Firefox Console
            (e.metaKey && e.altKey && e.key === 'I');                  // Mac DevTools

        if (blocked) {
            e.preventDefault();
            e.stopPropagation();
            showProtectionToast();
            return false;
        }
    });

    // --- 3. Disable Image Drag & Drop ---
    document.addEventListener('dragstart', function (e) {
        if (e.target.tagName === 'IMG') {
            e.preventDefault();
            showProtectionToast();
        }
    });

    // --- 4. Disable Text Selection ---
    document.addEventListener('selectstart', function (e) {
        // Allow selection inside form inputs & textareas
        if (!['INPUT', 'TEXTAREA'].includes(e.target.tagName)) {
            e.preventDefault();
        }
    });

    // --- 5. Block Print ---
    window.addEventListener('beforeprint', function (e) {
        e.preventDefault();
        showProtectionToast();
    });

    // --- 6. Disable image pointer events & user-select via CSS ---
    const protectStyle = document.createElement('style');
    protectStyle.textContent = `
        img { -webkit-user-drag: none; user-drag: none; pointer-events: none; }
        body { -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; }
        input, textarea { -webkit-user-select: text; -moz-user-select: text; -ms-user-select: text; user-select: text; }
    `;
    document.head.appendChild(protectStyle);

})();
// ============================================================
