# 🌳 Tree Planting Statistics

A single page React app built with Typescript to render tree planting statistics. The data is collected from the Ecologi public API and then processed to create a graph that shows the trees planted per day for a determined range of time (full 2019 year data as default). The user has the ability to modify this range of time by month and year sliders, the graph will update following the changes.

## 🚀 Getting started

1. Clone repository
2. Install node modules by running

```bash
npm install
# or
yarn install
```

3. Create a .env.local file with the url to the ecologi API:

```bash
REACT_APP_ECOLOGI_SERVICE_URL='https://x.api.ecologi.com/'
```

4. Run the project locally:

```bash
npm start
# or
yarn start
```

5. You should find your web app at http://localhost:3000.

In order to run the tests you can run

```bash
yarn test --watchAll
```

This app uses lint and prettier to keep the code clean and consistent.

## ✍ Comments about the developer challenge

### 💭 Thoughts about the API Data Structure

I believe that the structure of the data from the /trees endpoint could be improved for the purpose of the requested graph. It currently returns an array of [treesPlanted, timeStamp], but there are timeStamps repeated, which increases largely the size of our response array. Ideally, we would get an array with a single entry per day, where the first value, treesPlanted, would be the sum of all the trees planted on that day. I personally prefer objects than arrays for this sort of data, which I think helps preventing issues when processing data in the UI.

My ideal response object would be something like:

```bash
plantedTreesData = {
  {total: 1254, date: 8484946464},
  ....
}
```

### 🛑 Blockages

The main issue that I encountered was choosing the wrong chart library. I first started with rechartjs and saw big issues with performance, sometimes completely breaking down my application. I thought that this was a result of my code and data structures, so I spent some time around it untill I decided to change to chartjs, which ran smoothly.

### 🤞 Assumptions

- There were few data points which seemed to be outliers, like a day that states around 32million trees planted. This extreme data cases would sometimes be ignored in plots. I was not sure this was intentional, and I am not a data science expert myself so I decided to keep all the data records.

### 👎 Things that I am not happy with

- The design of the page is not fully responsive, trying to view the graph in a mobile device would be a really frustrating task.
- There are a few lint warnings ignored about types in ecologiServiceModel.ts, I am afraid I have not had time to fix those and since were warning-levels have left them as they are.
- There is some logic missing around the range of time, like preventing the user to select a 'toMonth' higher than a 'fromMonth' when the same year is selected. This would involve some communication between the sliders.
- The redux store is not super useful at the moment. I had some early ideas for different routing pages, but I didn't have time to implement them.
- I could add a spinner after selecting a different time range, while the graph is loading. Since the library provides animation that gives some feedback to the user, I decided that this was not in the 'must-have' list.

### 👍 Things that I am happy with

- I am not used to deal with big data sets that need to be rendered in a chart, after my poor first attempt with rechartjs I had little hopes that the app would reach a decent working point, and I think it did.
- Using material (mui) components for the sliders provides supported accessibility, like key navigation.
- For the size of the web app it might be an overkill, but I believe it is always a good idea to pull the text from a language file, which would greatly simplify future page translations.
