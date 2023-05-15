---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<!-- {% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}
 -->
<span class='anchor' id='about-me'></span>

I am a current master student in Biomedical Engineering at Johns Hopkins University. Before that, I did my bachelor's degree at Zhejiang University. My research interest includes precision care medicine, multi-omics data analysis and machine learning for mediacal application.
<!-- My research interest includes neural machine translation and computer vision. I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->


<!-- # 🔥 News
- *2021.08*: &nbsp; . 
- *2021.06*: &nbsp; Graduated from Zhejiang University.  -->

# 🎓 Educations
- *2021.08 - 2023.05 (expected)*, M.S.E. in Biomedical Engineering, Johns Hokins University.  
  Coursework: Biomedical Data Science, Introduction to Data Science, Statistical Learning For Engineers, Computational Stem Cell Biology, Machine Learning for Medical Applications, Computational Molecular Medicine, Computing the Transcriptome, Foundations of Computational Biology and Bioinformatics 
- *2017.09 - 2021.06*, B.S. in Biological Science, Zhejiang University.   
  Coursework: Calculus, Linear algebra, Probability Theory and Mathematical Statistics, C Programming, Genetics, Molecular biology, Biostatistics and experimental design, Bioinformatics, Systems biology

# 🧬 Research
- *2022.09 - now*,  Toward precision rehabilitation after stroke: prediction of mobility recovery using big data and functional status, superviced by Prof. [Ryan Roemmich](https://www.hopkinsmedicine.org/profiles/details/ryan-roemmich).
- *2020.11 - 2021.06*,  Research intern at Institute of Translational Medicine, Zhejiang University, superviced by Prof. [Ye Feng](https://person.zju.edu.cn/en/pandafengye).
- *2018.10 - 2020.10*,  Research intern at [The Sperm Laboratory at Zhejiang University](http://www.spermlab.org/), superviced by Prof. [Wan-Xi Yang](https://mypage.zju.edu.cn/spermlab)

# 📝 Publications 

<!-- <div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2016</div><img src='images/500x300.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Deep Residual Learning for Image Recognition](https://openaccess.thecvf.com/content_cvpr_2016/papers/He_Deep_Residual_Learning_CVPR_2016_paper.pdf)

**Kaiming He**, Xiangyu Zhang, Shaoqing Ren, Jian Sun

[**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
</div>
</div> -->

<!-- - [Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet](https://github.com), A, B, C, **CVPR 2020** -->

*De novo* assembly of *C. difficle* genomes using enhanced Next Generation Sequencing technology. (Preparation)
 
# 🎨 Projects
- *2023.05*, A pipeline to better infer the true location of multi-mapped reads. Developed a pipeline that distributes multi-mapped reads to loci with higher coverage and investigated how the redistribution of multi-mapped reads affects the accuracy of StringTie to assemble transcripts.
- *2023.04*, Insights into Breast Cancer from deconvolution of bulk RNA Sequencing Data. Use scRNA-seq data to deconvolute the bulk RNA seq data, then applied XGBoost using the ESTIMATE immune score to determine the impact of various immune cell types on the immune response. Use survival analysis to investigate the potential correlation between cellular fractions and clinical outcomes.
- *2022.11*, Single-cell DNA and protein expression prediction. Built sparse matrices based on data from two different sequencing technologies using singular value decomposition(SVD). Designed a multimodal model using layer-regularized dense neural network and multi-model embedding methods. Predicted how DNA, RNA, and protein measurements co-vary with development in single cells and derived a correlation score of 0.809 on test dataset.
- *2022.04*, Developed an automated method to map clinical concepts in exam rubric to various ways in which these concepts are expressed in clinical patient notes written by medical students, it is the final project of Machine learning for medical applications. Pre-trained deep learning models such as Bert, RoBERTa and  DeBERTa are used to perform token classification task. This model can identify identify specific clinical concepts in patient notes from medical licensing exams with an F-score of 83%.
- *2022.04*, Engineered cardiomyocytes(CM) analysis using scRNA-seq data([repo](https://github.com/zhuzhusleepearly/Engineered-Cardiomyocytes-Analysis)), it is the final project of Computational Stem Cell Biology. Used pySCN to measure the purity of Engineered CM and shannon entropy values to measure the maturity of Engineered CM. Used CellOracle to investigate what transcription factors that they could overexpress or knock out to drive the maturation of cardiomyocytes. 
- *2022.04*, Analysis of gene expression levels of tumor and normal colon tissues, it is the final project of Computational Molecular Medicine. Identified differentially expressed genes and visualized it using fold change, t-test based on R packages. Then used GO to perform gene set enrichment analysis. Used hypothesis test, dimensionality reduction and other methods to extract features. Used machine learning techniques, such as clustering, neural network, to conduct a model which classify the tissue type. Then evaluated the model effectiveness on test data. \| [\[report\]](https://drive.google.com/file/d/1M5aZ6fXUAvm5W5FLfTFenN7fFkigtxbx/view?usp=sharing)
- *2019.10*, Created protein interaction time network based on E.coli, it is the final project of System Biology. Analyzed the topological properties and parameters of complex biological networks and topology of the E.coli-based protein interaction time network, such as time-based protein interaction network
changes, visual comparison of time network, etc.

 
# 🏢 Internships
- *2022.11 - now*, Advanced Institute of Information Technology, Peking University. Assembled Illumina, TELL-Seq and Nanopore genomes of different subtypes of C. difficile, and compare the sequencing results using MUMmer. Developed workflow for downstream analysis of sequencing, including non-coding RNA prediction, gene annotation and circos plot, and deployed it through Docker. Aimed to use the TELL-Seq to construct a phylogeny tree of C. difficile based on whole genome information. 

# 🏆 Honors and Awards
- *2021.10* Zhejiang University Scholarship. 
<!-- - *2021.09* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
 -->
