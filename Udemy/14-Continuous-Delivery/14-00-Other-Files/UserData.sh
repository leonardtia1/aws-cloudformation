          #!/bin/bash
          sudo yum update
          sudo yum install ruby
          sudo yum install wget
          sudo yum -y erase java-1.7.0-openjdk.x86_64
          sudo yum -y install java-1.8.0-openjdk.x86_64
          sudo yum -y install java-1.8.0-openjdk-devel
          sudo yum -y install tomcat8
          sudo service tomcat8 start
          sudo service tomcat8 enable
          cd /home/ec2-user
          wget https://aws-codedeploy-us-east-2.s3.amazonaws.com/latest/install
          chmod +x ./install
          sudo ./install auto  
          
          sudo find / -type d -name webapps
          sudo cd /var/lib/tomcat8/webapps
          sudo mkdir ROOT
          sudo cd ROOT/
          sudo echo "This is to test tomcat" > index.html


          # verification after EC2 launch:
          sudo service codedeploy-agent status
          sudo java8 -version
          sudo service tomcat8 status
          sudo service tomcat8 start

          

        # http://3.14.146.65:8080/ccdemo/hello
        # http://3.14.146.65:8080