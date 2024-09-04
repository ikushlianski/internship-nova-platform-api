{{/*
Expand the name of the chart.
*/}}
{{- define "nova-api.name" -}}
{{- default .Chart.Name .Values.nameOverride | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Create a default fully qualified app name.
We truncate at 63 chars because some Kubernetes name fields are limited to this (by the DNS naming spec).
If release name contains chart name it will be used as a full name.
*/}}
{{- define "nova-api.fullname" -}}
{{- if .Values.fullnameOverride }}
{{- .Values.fullnameOverride | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- $name := default .Chart.Name .Values.nameOverride }}
{{- if contains $name .Release.Name }}
{{- .Release.Name | trunc 63 | trimSuffix "-" }}
{{- else }}
{{- printf "%s-%s" .Release.Name $name | trunc 63 | trimSuffix "-" }}
{{- end }}
{{- end }}
{{- end }}

{{/*
Create chart name and version as used by the chart label.
*/}}
{{- define "nova-api.chart" -}}
{{- printf "%s-%s" .Chart.Name .Chart.Version | replace "+" "_" | trunc 63 | trimSuffix "-" }}
{{- end }}

{{/*
Common labels
*/}}
{{- define "nova-api.labels" -}}
helm.sh/chart: {{ include "nova-api.chart" . }}
{{ include "nova-api.selectorLabels" . }}
app.kubernetes.io/version: "de71167"
app.kubernetes.io/managed-by: {{ .Release.Service }}
{{- end }}

{{/*
Deployment labels
*/}}
{{- define "nova-api.deploymentLabels" -}}
app.kubernetes.io/version: "{{ .Values.build_hash }}"
{{- end }}

{{/*
Selector labels
*/}}
{{- define "nova-api.selectorLabels" -}}
app.kubernetes.io/name: {{ include "nova-api.name" . }}
app.kubernetes.io/instance: {{ .Release.Name }}
{{- end }}

{{/*
Create the name of the service account to use
*/}}
{{- define "nova-api.serviceAccountName" -}}
{{- if .Values.serviceAccount.create }}
{{- default (include "nova-api.fullname" .) .Values.serviceAccount.name }}
{{- else }}
{{- default "default" .Values.serviceAccount.name }}
{{- end }}
{{- end }}
