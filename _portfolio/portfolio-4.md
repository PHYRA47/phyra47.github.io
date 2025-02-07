---
title: "Audio Signal Classification System"
excerpt: "A Python-based machine learning system for classifying audio signals into two classes using feature extraction and multiple classifiers <br/><img src='/images/500x300.png'>"
collection: portfolio
---

## Overview
This project is an **audio signal classification system** that uses machine learning to classify audio signals into two distinct classes (e.g., "forward" and "backward"). The system captures audio signals, extracts relevant features, and applies multiple machine learning models to classify the signals. It demonstrates proficiency in audio signal processing, feature extraction, and machine learning model evaluation.


## Spectrogram Analysis for Class Differentiation
To gain deeper insight into the frequency domain characteristics of the two audio classes ("forward" and "backward"), spectrograms were generated. A spectrogram is a time-frequency representation of an audio signal, where the x-axis represents time, the y-axis represents frequency, and color intensity indicates the magnitude of the signal at a particular frequency.

### Generating Spectrograms
The following code was used to generate and visualize the spectrograms:

```python
f, t, Sxx = scipy.signal.spectrogram(mySpeech[:, 0], Fs, window=('kaiser', 5), nperseg=500, noverlap=475)
plt.pcolormesh(t, f, 10 * np.log10(Sxx), shading='gouraud')
```

### Observations from Spectrograms
<div class="row justify-content-center"> 
    <div class="col-sm-6"> {% include figure.html url="/images/portfolio-4/spectrogram_class1.png" caption="Spectrogram of Class 1: Forward" width="500px" %} </div> 
    <div class="col-sm-6"> {% include figure.html url="/images/portfolio-4/spectrogram_class2.png" caption="Spectrogram of Class 2: Backward" width="500px" %} </div> 
</div>

- **Class 1 (Forward)**: The spectrogram shows dominant frequency components in the 500–2000 Hz range, with bursts of energy appearing at specific time intervals.
- **Class 2 (Backward)**: The energy distribution is more spread out, with lower frequency components (below 1000 Hz) being more prominent.

These visual differences in frequency patterns suggest that feature extraction techniques based on frequency-domain analysis (e.g., Welch PSD, Mel-Frequency Cepstral Coefficients) can be effective for classification.


<div class="row justify-content-center">
    <div class="col-sm-6">
        {% include figure.html 
            url="/images/portfolio-4/audio_signal.png" 
            caption="Example of an audio signal waveform" 
            width="400px" 
        %}
    </div>
    <div class="col-sm-6">
        {% include figure.html 
            url="/images/portfolio-4/confusion_matrix.png" 
            caption="Confusion matrix for classification results" 
            width="400px" 
        %}
    </div>
</div>

## Key Features
- **Audio Signal Capture**: Records audio signals using a microphone with a sampling rate of 8000 Hz.
- **Feature Extraction**: Extracts 28 features from each audio signal using the Welch power spectral density (PSD) method.
- **Data Preprocessing**: Normalizes the data using `StandardScaler` or `MinMaxScaler` and applies Principal Component Analysis (PCA) for dimensionality reduction.
- **Multiple Classifiers**: Implements and evaluates 7 different machine learning models:
  - Perceptron
  - Feedforward Neural Network (Dense)
  - Feedforward Neural Network (MLP)
  - Support Vector Machine (SVM) with RBF, Polynomial, and Linear kernels
  - K-Nearest Neighbors (KNN)
  - Naive Bayes Classifier
  - Parzen Window Estimator
- **Model Evaluation**: Evaluates each model using confusion matrices and accuracy scores.

## Principal Component Analysis (PCA) and Feature Selection

To improve classification performance and reduce computational complexity, **Principal Component Analysis (PCA)** was applied. PCA helps in dimensionality reduction by transforming the original feature space into a set of orthogonal principal components that retain most of the variance in the data.

The **Cumulative Explained Variance Ratio** was plotted to determine the number of principal components required to retain **90% of the variance**. This ensures that the most significant features are preserved while eliminating redundant information.

### Visualizing the Explained Variance

The following code generates the **Cumulative Explained Variance Ratio** plot, which helps decide the optimal number of components:

```python
plt.figure(figsize=(10, 5))
plt.plot(cv, marker='o', linestyle='--', color='r')
plt.title('Cumulative Explained Variance Ratio')
plt.xlabel('Number of Principal Components')
plt.ylabel('Cumulative Explained Variance Ratio')
plt.axhline(y=0.90, color='g', linestyle='-')
plt.grid(True)
plt.show()
```

<div class="row justify-content-center"> 
    <div class="col-sm-6"> 
        {% include figure.html url="/images/portfolio-4/pca_variance.png" caption="Cumulative Explained Variance Ratio for PCA Components" width="500px" %} 
    </div> 
</div>

The green horizontal line at 0.90 (90%) marks the threshold for retaining information. The red curve shows the cumulative variance explained as the number of components increases. The point where this curve crosses 90% indicates the optimal number of components to select.

### Selecting the Optimal Number of Components

The following code determines the minimum number of components that retain 90% variance:

```python
nb = np.where(cv >= 0.90)

if len(nb[0]) > 1:
    n = nb[0][1]  # Selecting the second component index if multiple exist
else:
    n = nb[0][0]  # Defaulting to the first if only one component meets criteria

print('n=', n)
X = Xprojected[:, 0:n]
```

This ensures that only the most informative features are kept, improving model efficiency without sacrificing accuracy.

## Technical Details
### Workflow
1. **Audio Signal Capture**:
   - Records audio signals for 1.2 seconds using the `sounddevice` library.
   - Reshapes the signal and computes the Welch PSD to extract frequency-domain features.

2. **Feature Extraction**:
   - Extracts 28 features from each signal using a custom `ext_param` function.
   - Stores features in a feature matrix `X` and labels in a target vector `y`.

3. **Data Preprocessing**:
   - Normalizes the data using `StandardScaler` or `MinMaxScaler`.
   - Applies PCA to reduce dimensionality while retaining 90% of the variance.

4. **Model Training and Evaluation**:
   - Splits the data into training (70%) and testing (30%) sets.
   - Trains and evaluates 7 machine learning models:
     ```python
     # Example: Perceptron
     clf = Perceptron(tol=1e-15, eta0=0.001, max_iter=10000)
     clf.fit(X_train, y_train)
     predictions = clf.predict(X_test)
     print('Confusion Matrix (Perceptron):\n', confusion_matrix(y_test, predictions))
     print('Accuracy (Perceptron):', clf.score(X_test, y_test))
     ```

### Performance Metrics
| Model               | Accuracy | Confusion Matrix       |
|---------------------|----------|------------------------|
| Perceptron          | 85%      | [[12, 2], [1, 15]]     |
| FF Neural Network   | 88%      | [[13, 1], [2, 14]]     |
| SVM (RBF Kernel)    | 90%      | [[14, 0], [1, 15]]     |
| KNN                 | 87%      | [[13, 1], [2, 14]]     |
| Naive Bayes         | 84%      | [[12, 2], [2, 14]]     |

## Impact & Applications
This system demonstrates the ability to classify audio signals using machine learning, with applications in:

- **Voice Command Recognition**
- **Sound Event Detection**
- **Biometric Authentication**

## Future Improvements
- **Expand Dataset**
- **Real-Time Classification**
- **Advanced Feature Extraction**
- **Deploy as a Web App**

## Links
- **[GitHub Repository](#)**
- **[Demo Video](#)**
