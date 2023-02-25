terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }
  backend "s3" {
    bucket = "my-infra"
    key    = "ui-generator.tfstate"
    region = "eu-central-1"
  }
  required_version = ">= 1.3.0"
}

provider "aws" {
  region = "eu-central-1"
  default_tags {
    tags = {
      ManagedBy = "terraform"
      Repo      = "ui-generator"
    }
  }
}

locals {
  domain_name = "dynamic-ui-generator"
}