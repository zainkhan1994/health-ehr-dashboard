# Calendar View - Lab Results Feature

## Overview
The Calendar View provides a visual timeline of lab results, allowing users to track trends over time and correlate labs with symptoms, supplements, sleep, and events.

## Features

### 1. Calendar Display Modes
- **Monthly View**: Shows a full month calendar with lab status badges on each date
- **Weekly View**: Displays a week at a time with more detailed information per day

### 2. Date Tile Status Badges
Each date displays a color-coded status badge:
- **Normal** (Green): All tests within reference range
- **High** (Red): One or more tests above reference range
- **Low** (Yellow): One or more tests below reference range
- **Mixed** (Yellow/Red gradient): Both high and low results on the same date
- **Not Run** (Gray): No tests performed on this date

### 3. Interactive Side Panel
Clicking on a date opens a sliding side panel showing:
- Lab results grouped by panel (CMP, CBC, Lipid, Thyroid, etc.)
- Individual marker values with units
- Reference ranges for each test
- Directional flags (High/Low/Normal)
- Clinical notes if available

### 4. Filtering Options
- **Filter by Panel**: View only specific test panels (CMP, CBC, Lipid, Thyroid)
- **Filter by Marker**: View a single test marker across all dates
- Both filters can be combined for precise data viewing

### 5. Date Comparison Mode
- Select two dates to compare lab results side-by-side
- View percentage changes between dates
- Identify trends and patterns over time
- Color-coded directional indicators (↗ increase, ↘ decrease)

### 6. Integration with Trends Analysis
- Click any lab marker in the side panel to view its detailed trend chart
- Seamlessly navigate between calendar and trends views
- Maintains context and filter selections

## Technical Implementation

### Data Structure
```javascript
calendarLabsByDate = {
  "2024-01-15": [
    {
      collected: "2024-01-15",
      testName: "Glucose",
      result: "95",
      units: "mg/dL",
      flag: "",
      panel: "Comprehensive Metabolic Panel",
      referenceRange: "70-100",
      rawTestName: "glucose"
    },
    // ... more tests
  ]
}
```

### Key Functions
- `initializeCalendarView()`: Initializes calendar with current data
- `renderMonthView()`: Renders monthly calendar grid
- `renderWeekView()`: Renders weekly calendar view
- `calculateDateStatus()`: Determines status badge color based on lab results
- `openLabDetailPanel()`: Opens side panel with lab details for selected date
- `showComparison()`: Displays side-by-side comparison of two dates

### Status Calculation Logic
```javascript
- If no labs on date: "not-run"
- If has both high and low: "mixed"
- If has high only: "high"
- If has low only: "low"
- Otherwise: "normal"
```

## User Interface

### Navigation
1. Click "Calendar View" in the sidebar
2. Use Prev/Next buttons to navigate months
3. Click "Today" to return to current month
4. Toggle between Monthly and Weekly views

### Viewing Lab Details
1. Click any date with lab results
2. Side panel slides in from the right
3. Labs are grouped by panel
4. Click a lab marker to view detailed trends
5. Click X or overlay to close panel

### Using Comparison Mode
1. Select "Compare Dates" from dropdown
2. Click first date to compare
3. Click second date to compare
4. Comparison panel opens automatically
5. View side-by-side results and percentage changes

## Data Behavior

### Date Indexing
- Labs are indexed by `collected` date (specimen draw date)
- NOT indexed by `reported` date
- Ensures accurate timeline of when tests were performed

### Historical Reference Ranges
- Each lab result preserves its original reference range
- Allows tracking if reference ranges changed over time
- Important for accurate historical analysis

### Missing Data Handling
- Dates without labs show "Not Run" status
- Filters respect missing data (won't show empty dates when filtered)
- Comparison mode handles missing tests gracefully

## Use Cases

### Track Lab Trends
- Identify patterns in test results over months/years
- Spot seasonal variations
- Monitor chronic conditions

### Correlate with Events
- Match lab dates with symptom onset
- Track impact of medication changes
- Relate results to lifestyle modifications

### Pre-Appointment Preparation
- Review lab history before doctor visits
- Identify concerning trends to discuss
- Compare current vs. previous results

### Research and Analysis
- Export filtered date ranges
- Study relationships between different markers
- Generate visual reports for healthcare providers

## Future Enhancements
The calendar structure supports future overlays for:
- Sleep tracking data
- Medication schedules
- Supplement intake
- Symptom logs
- Exercise activities
- Dietary changes

## Browser Compatibility
- Works on all modern browsers (Chrome, Firefox, Safari, Edge)
- Responsive design works on mobile devices
- Uses standard JavaScript (ES6+) and CSS3
- No external dependencies beyond existing Chart.js

## Privacy and Security
- All data processing happens client-side
- No data sent to external servers
- Uses existing localStorage for preferences
- Data remains in the browser
