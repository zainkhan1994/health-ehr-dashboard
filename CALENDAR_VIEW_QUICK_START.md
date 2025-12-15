# Quick Start Guide - Calendar View

## Accessing the Calendar View

1. Open the Health EHR Dashboard in your browser
2. Look for **"Calendar View"** in the left sidebar under "Health Records"
3. Click to open the calendar view

## Basic Navigation

### Viewing Different Time Periods
- Click **"Prev"** to go to the previous month (or week in weekly view)
- Click **"Next"** to go to the next month (or week in weekly view)
- Click **"Today"** to jump back to the current month

### Switching Between Views
- Click **"Month"** button to see the monthly calendar grid
- Click **"Week"** button to see a detailed weekly view with more information per day

## Understanding the Status Badges

Each date on the calendar shows a colored badge:

| Badge | Color | Meaning |
|-------|-------|---------|
| Normal | 🟢 Green | All lab results are within normal reference ranges |
| High | 🔴 Red | One or more results are above the reference range |
| Low | 🟡 Yellow | One or more results are below the reference range |
| Mixed | 🔵 Blue/Gradient | Both high and low results on the same date |
| Not Run | ⚪ Gray | No lab tests were performed on this date |

## Viewing Lab Details

1. **Click any date** that has lab results (shows a status badge)
2. A **side panel** will slide in from the right
3. Lab results are **grouped by panel**:
   - Comprehensive Metabolic Panel (CMP)
   - Complete Blood Count (CBC)
   - Lipid Panel
   - Thyroid Panel
   - Other panels
4. Each test shows:
   - Test name
   - Result value with units
   - Reference range
   - Status flag (Normal/High/Low)
5. **Click the X** or click outside the panel to close it

## Filtering Lab Results

### Filter by Panel
1. Find the **"Filter by Panel"** dropdown
2. Select a specific panel (CMP, CBC, Lipid, or Thyroid)
3. Calendar updates to show only dates with that panel
4. Select "All Panels" to see all results again

### Filter by Specific Marker
1. Find the **"Filter by Marker"** dropdown
2. Select a specific test (e.g., "Glucose", "Cholesterol")
3. Calendar shows only dates with that specific test
4. Select "All Markers" to see all results again

### Combining Filters
You can use both filters together to narrow down results even more!

## Comparing Two Dates

### Enable Comparison Mode
1. Find the **"Comparison Mode"** dropdown
2. Select **"Compare Dates"**
3. A yellow info box appears

### Select Dates to Compare
1. Click the **first date** you want to compare
   - It will be highlighted with a blue border
2. Click the **second date** you want to compare
   - It will also be highlighted
3. The comparison panel **automatically opens**

### What You'll See
- Side-by-side results for each test
- **Percentage change** between the two dates
- **Direction indicator** (↗ increase or ↘ decrease)
- Color coding:
  - Green ↘ = Decrease (good for cholesterol, glucose, etc.)
  - Red ↗ = Increase (concerning for some markers)

### Exit Comparison Mode
1. Click the **X** on each selected date tag
2. Or change "Comparison Mode" back to "Off"

## Viewing Detailed Trends

1. In the side panel, **click any lab marker**
2. The panel closes and switches to the **Trends Analysis** view
3. You'll see a detailed chart showing that test's history over time
4. Click **"Calendar View"** in the sidebar to return to the calendar

## Tips for Effective Use

### Track Patterns Over Time
- Use monthly view to see long-term patterns
- Look for clusters of high or low results
- Note seasonal variations

### Correlate with Events
- Match lab dates with when you started/stopped medications
- Correlate with symptom changes
- Track impact of diet or exercise changes

### Prepare for Doctor Visits
- Use comparison mode to show changes since last visit
- Filter by specific panels relevant to your condition
- Export data for discussion with your doctor

### Monitor Chronic Conditions
- Filter by relevant markers (e.g., glucose for diabetes)
- Watch for trending up or down over months
- Track response to treatment adjustments

## Troubleshooting

### "No labs appear on the calendar"
- Check your filters - you may have a panel or marker filter active
- Verify data is loaded (check "All Lab Results" view)
- Make sure you're viewing the correct time period

### "Side panel doesn't open"
- Only dates with lab results are clickable
- Try clicking directly on the date number or status badge
- Refresh the page if the panel seems stuck

### "Comparison isn't working"
- Make sure "Comparison Mode" is set to "Compare Dates"
- Select two different dates that both have lab results
- The panel opens automatically after selecting the second date

### "Can't see all my tests"
- Scroll down in the side panel to see all grouped panels
- Check if you have an active filter limiting results
- Try switching between monthly and weekly views

## Future Enhancements

The calendar view is designed to support future integrations with:
- Sleep tracking data
- Medication schedules
- Supplement intake logs
- Symptom diaries
- Exercise activities

Stay tuned for updates!

## Need More Help?

- Check `CALENDAR_VIEW_DOCUMENTATION.md` for technical details
- See `CALENDAR_VIEW_MOCKUP.md` for visual examples
- Review the main `README.md` for general dashboard features
