# User data for North Virginia only

#!/bin/bash
yum -y update
yum install -y ruby
yum install -y aws-cli
yum install wget
cd /home/ec2-user
 
wget https://aws-codedeploy-us-east-1.s3.us-east-1.amazonaws.com/latest/install
 
sudo chmod +x ./install
sudo ./install auto
sudo service codedeploy-agent start


#Install the CodeDeploy agent for Amazon Linux or RHEL
https://docs.aws.amazon.com/codedeploy/latest/userguide/codedeploy-agent-operations-install-linux.html

#Resource kit bucket names by Region
https://docs.aws.amazon.com/codedeploy/latest/userguide/resource-kit.html#resource-kit-bucket-names
