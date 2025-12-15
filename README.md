# 🏥 Health EHR Dashboard

A comprehensive, medical-grade Electronic Health Record (EHR) dashboard for visualizing and analyzing personal lab results over time. Built with pure HTML, CSS, and JavaScript - no build tools required.

![Dashboard Screenshot](https://img.shields.io/badge/Status-Active-success)
![License](https://img.shields.io/badge/License-MIT-blue)
![No Dependencies](https://img.shields.io/badge/Dependencies-Chart.js%20only-green)

## 🌟 Features

### 📅 **Calendar View** ⭐ *New!*
- **Monthly & Weekly Views** - Visualize lab results on a calendar timeline
- **Status Badges** - Color-coded indicators (Normal/High/Low/Mixed) on each date
- **Side Panel Details** - Click any date to see all lab results grouped by panel
- **Date Comparison** - Compare two dates side-by-side with percentage changes
- **Smart Filtering** - Filter by specific panels (CMP, CBC, Lipid, Thyroid) or individual markers
- **Trend Integration** - Click any lab marker to view its detailed trend chart
- **Historical Tracking** - Track patterns and correlate labs with symptoms or events

### 📊 **Advanced Data Visualization**
- **Inline Mini Sparkline Charts** - Quick trend indicators in every table row
- **Detailed Trend Analysis** - Full-page interactive charts with Chart.js
- **Slide-in Panel** - Click any test for detailed historical trends
- **Color-coded Results** - Instant visual feedback (normal/high/low)

### 🔍 **Powerful Filtering & Search**
- **Global Search** - Find any test, result, or physician instantly
- **Multi-filter Support** - Filter by status, lab, panel, date range
- **Smart Bookmarking** - Flag important results for quick access
- **Custom Views** - Create and save personalized data views

### 📈 **70+ Lab Test Types**
Organized into medical panels:
- **Metabolic Panel** - Glucose, Electrolytes, Kidney Function
- **Lipid Panel** - Cholesterol, HDL, LDL, Triglycerides
- **Thyroid Function** - TSH, T3, T4
- **Complete Blood Count (CBC)** - WBC, RBC, Hemoglobin, Platelets, and more
- **Liver Function** - AST, ALT, Bilirubin
- **Vitamins & Nutrients** - Vitamin D, B12, Folate
- **Iron Panel** - Iron, Ferritin, TIBC, Transferrin
- **Inflammation Markers** - CRP, Sed Rate
- **Hormones** - Testosterone

### 🎯 **Smart Features**
- **Reference Range Analysis** - Automatic flagging of abnormal results
- **Midpoint Calculation** - Smart status determination (High/Slightly High/Middle/Slightly Low/Low)
- **Trend Indicators** - Visual arrows and percentage changes
- **Multi-physician Support** - Track results from different doctors
- **Lab Source Tracking** - Know which lab ran each test
- **Fasting Status** - Record whether tests were fasting or non-fasting
- **Notes & Annotations** - Add personal notes to any result

### 💾 **Data Management**
- **localStorage Persistence** - Bookmarks, statuses, and preferences saved locally
- **Column Visibility** - Show/hide columns based on your needs
- **Export to CSV** - Download filtered data for external analysis
- **Print-friendly** - Optimized for printing reports

### 📱 **User Experience**
- **Responsive Design** - Works on desktop, tablet, and mobile
- **Dark Mode Support** - Easy on the eyes
- **Keyboard Navigation** - Accessible interface
- **Fast Performance** - Handles 250+ lab results smoothly

## 🚀 Quick Start

### **Option 1: GitHub Pages (Live Demo)**
Visit: **[https://zainkhan1994.github.io/health-ehr-dashboard/](https://zainkhan1994.github.io/health-ehr-dashboard/)**

### **Option 2: Run Locally**

1. **Clone the repository**
```bash
git clone https://github.com/zainkhan1994/health-ehr-dashboard.git
cd health-ehr-dashboard
```

2. **Start a local server**

**Using Python:**
```bash
python3 -m http.server 8000
```

**Using Node.js:**
```bash
npx http-server -p 8000
```

**Using PHP:**
```bash
php -S localhost:8000
```

3. **Open in browser**
```
http://localhost:8000
```

## 📂 File Structure

```
health-ehr-dashboard/
├── index.html                    # Main dashboard (4,500+ lines)
├── health_data_database.json     # Lab results database (5,400+ lines)
├── README.md                     # This file
└── docs/
    └── screenshots/              # Dashboard screenshots
```

## 📊 Data Structure

The `health_data_database.json` contains structured lab results:

```json
{
  "lab_results": {
    "glucose": [
      {
        "collected": "2024-07-15",
        "result": "95",
        "units": "mg/dL",
        "range_low": 70,
        "range_high": 100,
        "reference_range": "70-100 mg/dL",
        "flag": "",
        "lab": "LabCorp",
        "ordering_physician": "Dr. Smith",
        "reported": "2024-07-15",
        "source_pdf": "healow_2024.pdf",
        "specimen_id": "ABC123",
        "fasting": "Yes",
        "notes": "Morning fasting test"
      }
    ]
  }
}
```

### **Supported Fields:**
- `collected` - Specimen collection date
- `result` - Test result value
- `units` - Measurement units
- `range_low` / `range_high` - Reference range bounds
- `reference_range` - Human-readable reference range
- `flag` - Lab flag (H=High, L=Low, HH=Critical High, etc.)
- `lab` - Laboratory name
- `ordering_physician` - Doctor who ordered the test
- `reported` - Date results were reported
- `source_pdf` - Source document
- `specimen_id` - Lab specimen identifier
- `fasting` - Was test done fasting? (Yes/No)
- `notes` - Additional notes

## 🎨 Dashboard Views

### 1. **Health Overview**
- Recent lab results (last 6 months)
- Abnormal results summary
- Quick stats and alerts
- Collapsible statistics section

### 2. **Calendar View** ⭐ *New!*
- Monthly and weekly calendar modes
- Color-coded date tiles showing lab status
- Lab count indicators on each date
- Sliding side panel with detailed results
- Date comparison mode for tracking changes
- Filter by panel or specific markers
- Direct link to trend charts

### 3. **Trends Analysis**
- Full-page trend charts
- Collapsible test category sidebar
- Interactive Chart.js visualizations
- Data table toggle

### 4. **All Lab Results**
- Complete searchable table
- 19 customizable columns
- Inline mini sparkline charts
- Export to CSV

### 4. **Test-Specific Views**
- Metabolic, Lipid, Thyroid, CBC, Kidney, Liver, Vitamins, Inflammation panels
- Filtered views for each test category

### 5. **Custom Views**
- Create personalized views
- Save filter combinations
- Choose custom icons
- Reusable view templates

### 6. **Research Views**
Symptom-focused analysis:
- Fatigue/Energy
- Depression/Mood
- Anxiety/Stress
- Muscle Weakness
- Hair Loss
- Heart Health
- Sleep Issues

## 🛠️ Technologies

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients, animations, shadows
- **JavaScript (ES6+)** - Vanilla JS, no frameworks
- **Chart.js** - Interactive trend charts
- **Font Awesome** - Icons
- **localStorage** - Client-side data persistence

## 🎯 Use Cases

- **Personal Health Tracking** - Monitor your lab results over time
- **Chronic Disease Management** - Track key biomarkers
- **Pre-appointment Prep** - Review history before doctor visits
- **Second Opinions** - Share comprehensive data with specialists
- **Health Research** - Identify patterns and correlations
- **Medication Monitoring** - Track changes after starting treatments

## 📈 Visualization Examples

### Mini Sparkline Charts
Each test shows an inline trend chart with:
- Line graph of historical values
- Color-coded data points (green=normal, yellow=borderline, red=abnormal)
- Reference range shading
- Trend indicator (↗ up, ↘ down, → stable)
- Percentage change
- Hover tooltips

### Detailed Trend Charts
Click any test to see:
- Full-size Chart.js visualization
- 3-point Y-axis (low, middle, high)
- Date-labeled X-axis
- Smooth blue line with data points
- Reference range subtitle
- Collapsible data table

## 🔒 Privacy & Security

- ✅ **100% Client-side** - No server uploads
- ✅ **No External APIs** - All processing happens in your browser
- ✅ **localStorage Only** - Data stays on your device
- ✅ **No Tracking** - No analytics or third-party scripts
- ✅ **Offline Capable** - Works without internet after initial load

## 📝 Customization

### Adding New Lab Results

1. Open `health_data_database.json`
2. Find or create the test type key (e.g., `"glucose"`)
3. Add a new entry:

```json
{
  "collected": "2025-01-15",
  "result": "92",
  "units": "mg/dL",
  "range_low": 70,
  "range_high": 100,
  "reference_range": "70-100 mg/dL",
  "flag": "",
  "lab": "Quest",
  "ordering_physician": "Dr. Johnson",
  "reported": "2025-01-15",
  "source_pdf": "quest_2025.pdf",
  "specimen_id": "XYZ789",
  "fasting": "Yes",
  "notes": ""
}
```

### Adding New Test Types

Add a new key in the `lab_results` object:

```json
"new_test_name": [
  {
    "collected": "2025-01-15",
    "result": "value",
    // ... other fields
  }
]
```

Update the `testCategories` object in `index.html` to include it in the sidebar.

## 🤝 Contributing

This is a personal health dashboard, but suggestions are welcome:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT License - Feel free to use this for your own personal health tracking!

## 🙏 Acknowledgments

- **Chart.js** - Beautiful, responsive charts
- **Font Awesome** - Comprehensive icon library
- **MyChart** - Inspiration for clean medical data visualization

## 📧 Contact

Zain Khan - [@zainkhan1994](https://github.com/zainkhan1994)

Project Link: [https://github.com/zainkhan1994/health-ehr-dashboard](https://github.com/zainkhan1994/health-ehr-dashboard)

---

**⚠️ Disclaimer:** This dashboard is for personal informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider regarding your health.

---

**Built with ❤️ for better personal health insights**
