---
layout: page
title: Project Proposal
permalink: /project-proposal/
---

## Introduction and Background
Birds play a vital role in our environment. They act as pollinators and disperse the seeds of various plants. However, human activities and structures have contributed to the endangerment of bird species whether it is by expanding and intensifying agriculture or forestry leading to habitat destruction, degradation, and fragmentation. In the past 50 years, Americas suffered from 15 bird extinctions, drastically impacting the environment, food chain, and the many other roles birds contributed to the ecosystem. Although conservation efforts are underway, there is much to be done. We believe that effective classification of bird species can help in the protection of birds because it will be easier for the average individual to identify and do their parts to ensure their preservation in the wild. In this project, we aim to formulate efficient methods to classify bird species based on bird features and images.


## Problem definition
Our dataset consists of roughly 12,000 bird images ranging across 200 species. Each bird image also comes with a set of descriptive features, such as forehead color, wing size, head pattern, and breast pattern. We aim to classify birds based on images as well as the birds’ physical features.  Past research work done by Branson et al used a convolution architecture, segmenting each bird image into patches including the bird’s head and body, and passing each patch into a convolution architecture to obtain a concatenated feature vector. We aim to classify birds more accurately using a deeper neural network architecture.

## Methods
We are planning to use a deep convolutional neural network, such as ResNet (He et al), as our predictions model. We decided that the auto-grad framework, Pytorch, would be best suited for designing and deploying such a model. We also plan on using several other supervised and unsupervised techniques, such as K-means, GMM, nearest neighbors, and decision trees trained on the birds’ features using Scikit-Learn, to compare the effectiveness of different approaches and find the optimal solution in terms of runtime and data-size compatibility.

## Potential results and Discussion
For the results, we predict that a deep neural network architecture might be of best success, since the task of classifying images is normally complex. However, since the dataset is labeled, we are interested in seeing how different methods would fare against such a challenge by comparing the accuracy of each method. We aim to fine-tune our models to effectively classify species of birds accurately and efficiently. After fine-tuning the models, we can input various pictures of different species of birds and the output will give us the exact classification of the bird.


### References

### Project Timeline
* [Gantt Chart](https://docs.google.com/spreadsheets/d/1K8TAAyZyUx2GFHKz_3PumAwTwLIs4kbEIz4do6UTyDA/edit?usp=sharing)

### Contribution Table
* A contribution table with all group members' names that explicitly provides the contribution of each member in preparing the project task.
(doesn't count towards word limit)
