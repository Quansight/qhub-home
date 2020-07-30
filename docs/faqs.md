# FAQ

+ **What is Q|Hub?**

  + Q|Hub is an integrated data science environment designed and developed by scientists at [Quansight](https://www.quansight.com/). Q|Hub enables teams to build and maintain a cost effective and scalable compute/data science platform in the cloud.

+ **What is Infrastructure as Code and how is it related to Q|Hub?**
  
  + [Infrastructure as Code](https://en.wikipedia.org/wiki/Infrastructure_as_code#:~:text=Infrastructure%20as%20code%20(IaC)%20is,configuration%20or%20interactive%20configuration%20tools.) is a system that handles the management of infrastructure (networks, virtual machines, load balancers, and connection topology), using the same versioning that DevOps teams use for source code. Infrastructure as Code enables DevOps teams to test applications in production-like environments early in the development cycle.
  
    Q|Hub brings together these concepts and tools in its architecture to provide users with the infrastructure that they need to perform development and deployments at scale without having to manually configure it themselves.

+ **What are some of the benefits of using Q|Hub?**

  + Q|Hub enables users to deliver stable environments rapidly and at scale. It allows teams enforce consistency by representing the desired state of their environments via code. Q|Hub as a Infrastructure as Code platform prevents runtime issues caused by missing dependencies or configuration drifts.

+ **Is Q|Hub free?**

  + Q|Hub is an open source project and free to use. However, the cloud service providers (Amazon Web Services, Google Cloud Platform, Digital Ocean) accessed through Q|Hub require your personal service account information. Any paid services these providers offer and you choose to use for your projects will not be free.

+ **What challenges does Q|Hub fix?**

  + Q|Hub aims to provide a smooth computing experience for teams of data scientists, engineers, educators, among others. For this, it abstracts away the complex details of deployment environments and management of infrastructure, making your configurations reproducible and your applications scalable.

+ **What technologies does Q|Hub rely on?**

  + Q|Hub is built upon [JupyterHub](https://jupyterhub.readthedocs.io/en/stable/) and extends JupyterHub's capabilities to a much larger scale that is not possible to achieve using JupyterHub only. Q|Hub comes with [Dask](https://dask.org/) integrated into it. Currently, Q|Hub can be used with the three of the most popular cloud services, Amazon Web Services (AWS), Google Cloud Platform (GCP), and Digital Ocean (DO). For more details about the technologies Q|Hub uses, please see [Q|Hub's Technology Stack](https://qhub.readthedocs.io/en/latest/index.html) in the documentation.

+ **What is Jupyter Notebook?**

  + Created by the nonprofit organization [Project Jupyter](https://jupyter.org/), the Jupyter Notebook is an open source web application that allows users to create and share documents that contain live code, equations, visualizations and narrative text on their browsers. See [Jupyter Notebook documentation](https://jupyter-notebook.readthedocs.io/en/stable/) for details.

+ **What is JupyterHub?**

  + JupyterHub is a multi-user hub that spawns, manages, and proxies multiple instances of the single-user Jupyter notebook server that Q|Hub is built upon. See [JupyterHub documentation](https://jupyterhub.readthedocs.io/en/stable/) for details.

+ **Q|Hub vs JupyterHub**

  + JupyterHub is an excellent platform for shared computational environments. However, deploying and maintaining a scalable compute environment with JupyterHub is a significantly challenging task. Q|Hub solves this problem by integrating Dask and the main components of cloud deployment into its architecture, providing a smooth experience of computation at scale on a single platform.

+ **What is Dask?**

  + Dask is an open source library for parallel computing written in Python. It enables researchers to scale computations beyond the limits of their local machines. See [Dask documentation](https://docs.dask.org/en/latest/) for more details.

+ **Do I have to be an experienced programmer/data scientist or DevOps engineer to use Q|Hub?**

  + The short answer is no. Q|Hub is designed to make it easier for people to use cloud services, parallel computing, and many other open source tools by abstracting away the complexities they entail and providing users with the infrastructure that is ready to use, scalable, and stable. If you want to customize the default settings of Q|Hub to tailor it for specific needs of your team, Q|Hub allows you to do that as well, but you might need to have a little bit more knowledge of DevOps.

+ **What are environments?**

  + A (programming) environment generally refers to a directory on your machine that contains a set of packages and dependencies to run your program or application. One might think of a programming environment similar to a namespace as defined in computer science/programming, which refers to an abstract container or environment created to hold a logical grouping of names.
  
    For different infrastructures, the term environment might be defined slightly differently. For example, a [conda environment](https://docs.conda.io/projects/conda/en/latest/user-guide/concepts/environments.html) is a collection of conda packages that one’s program needs to work as desired. [Terraform](https://www.terraform.io/), which is an open source infrastructure as code software tool, defines an environment as “refer to the idea of having multiple distinct, named states associated with a single configuration directory” while a Dask environment is used often interchangeably with [configuration](https://docs.dask.org/en/latest/configuration.html).

+ **Why open source?**

  + Open Source Software enables great advancements in science and we, at Quansight, are advocates of the open source community. Q|Hub is only a single example how powerful open source software can be and how a combination of some of the greatest open source tools can provide an invaluable service for those who are creating science.

+ **I have a question about "how to do *X* using Q|Hub" that is not answered in the [documentation](https://qhub.readthedocs.io/en/latest/index.html), what do I do?**

  + Create an issue in the [Github repo](https://github.com/Quansight/qhub-ops) to get answers from the creators of Q|Hub at Quansight.
