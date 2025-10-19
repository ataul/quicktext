// ==UserScript==
// @name         Gmail Quick Forward Button
// @namespace    https://bannerdevs.com/
// @version      1.3
// @description  Adds a "Quick Forward" button in Gmail that pre-fills specific "To" addresses automatically
// @author       Ataul Haque (Fixed by Gemini)
// @match        https://mail.google.com/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  // CONFIG: Add your desired email addresses here
  const TO_ADDRESSES = [
    'muzaffarsiddique@yahoo.com',
    'provc@buft.edu.bd',
      'registrar@buft.edu.bd',
      'nazmul@buft.edu.bd',
      'mafuzaalam@buft.edu.bd',
      'sajibul@buft.edu.bd',
      'academic.admin@buft.edu.bd',
      'siddhartha@buft.edu.bd',
      'jalal.uddin@buft.edu.bd',
      'shahidullah@buft.edu.bd',
      'allheads@buft.edu.bd',
      'alldeans@buft.edu.bd',
      'dsw@buft.edu.bd',
      'obaidullah@buft.edu.bd',
      'jillur.rahman@buft.edu.bd',
      'aminur.rahman@buft.edu.bd',
      'shaik.reza@buft.edu.bd',
      'rafi.rayhan@buft.edu.bd',
      'hasan.zakaria@buft.edu.bd',
      'imtiaj@buft.edu.bd',
      'librarian@buft.edu.bd'
  ];

  // CONFIG: Customize your button text
  const BUTTON_LABEL = 'Faculty Admin Forward';

  // Helper: Wait for an element to exist
  function waitForElement(selector, callback, intervalTime = 500, timeout = 10000) {
    const start = Date.now();
    const timer = setInterval(() => {
      const el = document.querySelector(selector);
      if (el) {
        clearInterval(timer);
        callback(el);
      } else if (Date.now() - start > timeout) {
        clearInterval(timer);
        console.log('Quick Forward Script: Element not found - ' + selector);
      }
    }, intervalTime);
  }

  // Function to add the button
  function addForwardButton() {
    const toolbar = document.querySelector('div.amn');
    if (!toolbar) return;

    if (document.querySelector('#quickForwardBtn')) return;

    const btn = document.createElement('button');
    btn.id = 'quickForwardBtn';
    btn.innerText = BUTTON_LABEL;
    btn.style.marginLeft = '8px';
    btn.style.background = '#1a73e8';
    btn.style.color = 'white';
    btn.style.border = 'none';
    btn.style.borderRadius = '4px';
    btn.style.padding = '4px 10px';
    btn.style.cursor = 'pointer';

    // --- [ প্রধান পরিবর্তন এখানে ] ---
    btn.addEventListener('click', () => {

      // পরিবর্তন: "Forward" বাটন খোঁজার জন্য একাধিক পদ্ধতি চেষ্টা করা

      // পদ্ধতি ১: টুলটিপ বা লেবেল-এ "Forward" শব্দটি আছে কিনা তা দিয়ে খোঁজা (সবচেয়ে ভালো)
      // data-tooltip*="Forward" মানে হলো টুলটিপে "Forward" শব্দটি থাকলেই চলবে
      let forwardButton = document.querySelector(
        'div[role="button"][data-tooltip*="Forward"], div[role="button"][aria-label*="Forward"]'
      );

      // পদ্ধতি ২: যদি প্রথম পদ্ধতি ব্যর্থ হয়, তবে ভেতরের লেখা (innerText) দিয়ে খোঁজা (আপনার পুরোনো পদ্ধতি)
      if (!forwardButton) {
        const allSpans = document.querySelectorAll('div[role="button"] span');
        // .find() দিয়ে span টি খোঁজা হচ্ছে এবং .closest() দিয়ে তার মূল বাটনটি ধরা হচ্ছে
        forwardButton = [...allSpans].find(el => el.innerText === 'Forward')?.closest('div[role="button"]');
      }

      // --- [ পরিবর্তন শেষ ] ---

      if (forwardButton) {
        forwardButton.click();

        // 'To' ফিল্ড খোঁজার সিলেক্টর (এটি ঠিক থাকার কথা)
        const toFieldSelector = [
            'textarea[aria-label="To"]',
            'input[aria-label="To recipients"]',
            'input[aria-label="To"]',
            'textarea[name="to"]',
            'input[name="to"]'
        ].join(', ');

        waitForElement(toFieldSelector, (toField) => {
          toField.focus();
          toField.value = TO_ADDRESSES.join(', ');
          toField.dispatchEvent(new Event('input', { bubbles: true }));
          toField.dispatchEvent(new Event('change', { bubbles: true }));
          toField.blur();
        }, 500, 10000);

      } else {
        // নতুন এরর মেসেজ
        alert('Could not find the native "Forward" button. The Gmail UI might have changed again. (v1.3 failed)');
      }
    });

    toolbar.parentElement.appendChild(btn);
  }

  // Observe DOM changes
  const observer = new MutationObserver(() => {
    if (document.querySelector('div.amn')) {
        addForwardButton();
    }
  });
  observer.observe(document.body, { childList: true, subtree: true });

})();