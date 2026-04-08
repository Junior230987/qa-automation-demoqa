
---

# 🐞 `DEFEITOS.md`

```md
# Defect Report

## Title
Advertisement overlays interfere with user interaction on DemoQA pages

---

## Description
While interacting with DemoQA pages, floating advertisement banners may overlap important elements, affecting user interaction and automated test execution.

---

## Steps to Reproduce
1. Access https://demoqa.com/automation-practice-form
2. Scroll through the page
3. Observe floating advertisement banners
4. Try to interact with elements near those banners

---

## Expected Result
All page elements should be fully accessible without obstruction

---

## Actual Result
Some elements may be partially covered by ads, requiring forced interaction or removal

---

## Severity
Medium

---

## Priority
Medium

---

## Justification
The issue does not completely block functionality but impacts usability and test stability, especially in automated testing scenarios

---

## Evidence
Observed during Cypress test execution while interacting with form elements