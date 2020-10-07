#!/bin/sh -e

NODE_LABELS=$(docker -H tcp://$SWARM_MANAGER:4243 node inspect $NODE_ID \
| jq -s '.[] | .[] | {
  id: .ID,
  hostname : .Description.Hostname,
  ip: .Status.Addr,
  name: .Spec.Labels.name,
  type: .Spec.Labels.type,
  zone: .Spec.Labels.zone,
  cloud: .Spec.Labels.cloud,
  state: .Status.State,
}')
export NODE_LABEL_IP=$(echo $NODE_LABELS | jq .ip)
export NODE_LABEL_NAME=$(echo $NODE_LABELS | jq .name)
export NODE_LABEL_TYPE=$(echo $NODE_LABELS | jq .type)
export NODE_LABEL_ZONE=$(echo $NODE_LABELS | jq .zone)
export NODE_LABEL_CLOUD=$(echo $NODE_LABELS | jq .cloud)
export NODE_LABEL_STATE=$(echo $NODE_LABELS | jq .state)

set -- npm start "$@"

exec "$@"
