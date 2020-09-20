Installing the AWS CLI version 2 on Linux
https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-linux.html

https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-windows.html

curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"
 
unzip awscliv2.zip
 
sudo ./aws/install
 
/usr/local/bin/aws --version
 
aws configure
 
aws ecr get-login-password | docker login --username AWS --password-stdin 788210522308.dkr.ecr.us-east-1.amazonaws.com
