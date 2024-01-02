#! /usr/bin/env bash

SUBGRAPH_NAME="fluence-deal-contracts"

help() {
script_name="$(basename $0)"
cat<<HELP
Usage: [BASIC_AUTH_SUBGRAPH] ${script_name} network action
Deploy subgraph to Fluence.

  network       Fluence network to run against - local, stage, testnet or kras
  action        action to run - create, deploy or remove

Examples:
  BASIC_AUTH_SUBGRAPH=user:pass ${script_name} stage deploy     Deploy subgraph to stage
  ${script_name} local deploy                                   Deploy subgraph to local
HELP
}

# Print help if no arguments provided
! (($#)) && help && exit 0

# Parse script arguments
while (($#)); do
  case "$1" in
    deploy|create|remove)
      action="$1"
      shift
      ;;
    local|stage|testnet|kras)
      network="$1"
      shift
      ;;
    -h|--help)
      help
      exit 0
      ;;
    *)
      echo "Unknown argument '$1'."
      help
      exit 1
  esac
done

# Prepare variables depending on network
case "$network" in
  local)
    GRAPHNODE_URL="${GRAPHNODE_URL:-http://localhost:8020}"
    IPFS_URL="${IPFS_URL:-http://localhost:5001}"
    ;;
  stage|testnet|kras)
    if [[ -z $BASIC_AUTH_SUBGRAPH ]]; then
      echo "Please provide credentials with 'BASIC_AUTH_SUBGRAPH' variable."
      exit 1
    else
      basic_auth="${BASIC_AUTH_SUBGRAPH}@"
    fi
    GRAPHNODE_URL="https://${basic_auth}graph-node-admin.fluence.dev"
    IPFS_URL="https://${basic_auth}graph-node-ipfs.fluence.dev"
esac

case "$action" in
  deploy)
    echo "Deploying subgraph on Fluence ${network} network with subgraph name: $SUBGRAPH_NAME..."
    graph deploy ${GRAPHNODE_URL} --ipfs ${IPFS_URL} --network ${network} --network-file config/networks.json --version-label 0.0.0 ${SUBGRAPH_NAME}
    ;;
  create)
    echo "Creating subgraph on Fluence with name: $SUBGRAPH_NAME..."
    graph create --node ${GRAPHNODE_URL} ${SUBGRAPH_NAME}
    ;;
  remove)
    echo "Removing subgraph on Fluence with name: $SUBGRAPH_NAME..."
    graph remove --node ${GRAPHNODE_URL} ${SUBGRAPH_NAME}
    ;;
esac
