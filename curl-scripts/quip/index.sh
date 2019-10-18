curl "http://localhost:4741/quips" \
  --include \
  --request GET \
  --header "Authorization: Token token=${TOKEN}"

echo
