awscloudformationlist-stacks--stack-status-filterCREATE_COMPLETE

awscloudformationcreate-stack--stack-namecodecommit-iam-users--template-bodyfile://C:\dev\code-commit-iam-users.yaml--on-failureDO_NOTHING--capabilities"CAPABILITY_NAMED_IAM"

awscloudformationdescribe-stacks--stack-namecodecommit-iam-usersawscloudformationcreate-stack--stack-namecodecommit-EC2--template-bodyfile://C:\dev\code-commit-ec2-instance.yaml--on-failureDO_NOTHING--parametersParameterKey=KeyPair,ParameterValue=consultrkm-us-east-1ParameterKey=EC2InstanceSize,ParameterValue=t2.micro

awscloudformationdescribe-stacks--stack-namecodecommit-EC2awscloudformationdelete-stack--stack-namecodecommit-EC2
