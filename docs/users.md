# Q|Hub for Teams

We define the general user as those who want to take full advantage of distributed computing without worrying about its maintenance. The user is provided the Jupyter platform interface while Q|Hub handles all the complexities of [**Kubernetes**](https://kubernetes.io/docs/home/). Kubernetes is a cloud-agnostic and open source orchestration system for managing containerized workloads and services for deployments. Q|Hub uses Kubernetes architecture on the backend for cloud computing that works seamlessly with your choice of a cloud provider. 


## Why Should Your Team Use Q|Hub?
 
### The Problem

Data scientists often have to circumvent unlimited limitations of the tools and platforms they use for distributed computing. Most of their energy is spent trying to manage unstable development environments, deciphering cloud specific deployment details, and suffering from unsuccessful, as well as costly, deployments, keeping up with constantly changing tooling, resolving package conflicts, and handling authentication problems among others. 

The creators of Q|Hub are data scientsits and DevOps engineers, who have experienced such highly common frustrations on a daily basis and decided to work towards creating an open source tool that answers the need for seamless distributed computing and deployment. 
    
    
### The Solution

If your goal is to have in your service a data science platform that answers many of the pain points of *doing data science* seamlessly on the cloud, Q|Hub is the tool for your team. Q|Hub offers a robust data science environment that can be easily tailored to suit your organization's needs. 


### QHub Architecture

The Q|Hub architecture operating on the familiar Jupyter interface brings together some of the most efficient components of data science and cloud deployment. Here is a brief high level description of the components that Q|Hub brings to the user if you are curious how the Q|Hub architecture is set up:

+ **Q|Hub makes Dask a fully integrated part of its architecture** 

    + Integration of [**Dask Gateway**](https://gateway.dask.org/) allows users to use Dask clusters in a shared, centrally managed cluster environment, without requiring users to have direct access to the underlying cluster backend, such as Kubernetes. 
    + Multifunctionality of [**Dask Scheduler**](https://docs.dask.org/en/latest/scheduler-overview.html) allows scheduling and computing tasks either on a single machine or in a distributed cluster.
    
    
+ [**Conda**](https://docs.conda.io/en/latest/) **as an integral part of Q|Hub's architectural design**
    
    + [**Conda Environments**](https://docs.conda.io/projects/conda/en/latest/user-guide/concepts/environments.html) enables the user to create their custom environments tailored for their teams' needs. 


+ **Kubernetes behind the scene**
    
    + [**Network File System (NFS)**](https://en.wikipedia.org/wiki/Network_File_System) protocol is one of the ways Kubernetes allows applications to access storage. 
    + A [**Kubernetes Volume**](https://kubernetes.io/docs/concepts/storage/volumes/) is just a directory, possibly with some data in it, which is accessible to the [**Containers**](https://kubernetes.io/docs/concepts/containers/) in a [**Kubernetes Pod**](https://kubernetes.io/docs/concepts/workloads/pods/pod/). 
    + Running containers together in a pod often makes file share between those containers a necessity. Files in a container are ephemeral, which means if a Container crashes, [**kubelet**](https://kubernetes.io/docs/reference/command-line-tools-reference/kubelet/#:~:text=Synopsis,object%20that%20describes%20a%20pod) will restart the container, however, the files will not be preserved. The [**Kubernetes Volume**](https://kubernetes.io/docs/concepts/storage/volumes/#types-of-volumes) abstraction solves this problem. 
    + NFS shares files directly from a container in a Kubernetes Pod, and sets up a [**Kubernetes Persistent Volume**](https://kubernetes.io/docs/concepts/storage/persistent-volumes/) accessed via NFS. 
    + Kubernetes has a built‑in configuration for HTTP load balancing, called [**Ingress**](https://kubernetes.io/docs/concepts/services-networking/ingress/) that defines and controls the rules for external connectivity to Kubernetes services. 
        + Users who need to provide external access to their Kubernetes services create an Ingress resource that defines rules. The Ingress controller can then automatically program a front‑end load balancer to enable Ingress configuration. 

Q|Hub streamlines and manages all the Kubernetes architecture detailed above and delivers a smooth deployment process to its users through its intuitive interface. 
![QHub Architecture](../images/high_level_architecture.png)

### Autoscaling 

Q|Hub enables the user to customize their environments for their needs easily and share them with other users in their team. Autoscaling of compute is straightforward with Q|Hub. The ability to utilize [**Dask Workers**](https://distributed.dask.org/en/latest/worker.html) eliminates most of the problems that come with working with big data. 


### Customizable Environments

You can define multiple development environments and share them with your team without worrying about stability or conflicts. 


### Authentication

Q|hub authentication can be done using `Auth0` and `Github`. 