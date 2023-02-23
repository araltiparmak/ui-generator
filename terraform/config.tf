terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.16"
    }
  }
  backend "s3" {
    bucket = "my-infra"
    key    = "vite-react.tfstate"
    region = "eu-central-1"
  }
  required_version = ">= 1.3.0"
}

provider "aws" {
  region = "eu-central-1"
  default_tags {
    tags = {
      ManagedBy = "terraform"
      Repo      = "vite-react"
    }
  }
}

variable "domain_name" {
  type = string
}